import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as API from '../api/api';
import { LOAD_TICKETS_PORTION, REQUEST_SEARCH_ID } from '../store/types';
import { addFoundTicket, loadTicketsPortion, setIsLoading, setSearchId } from '../store/actions';

function* fetchSearchId() {
  const searchId = yield call(API.getSearchId);

  yield put(setSearchId(searchId));
  yield put(loadTicketsPortion(searchId));
}

function* requestSearchIdSaga() {
  yield takeLatest(REQUEST_SEARCH_ID, fetchSearchId);
}

function* fetchTickets({ searchId }) {
  let searchingFinished = false;
  do {
    try {
      const response = yield call(API.getSearchPortion, searchId);
      yield put(addFoundTicket(response.tickets));
      searchingFinished = response.stop;
      yield put(setIsLoading(false));
    } catch (e) {
      console.error(e);
    }
  } while (!searchingFinished);
}

function* watchLoadTickets() {
  yield takeLatest(LOAD_TICKETS_PORTION, fetchTickets);
}

export function* rootSaga() {
  yield all([requestSearchIdSaga(), watchLoadTickets()]);
}
