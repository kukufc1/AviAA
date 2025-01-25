import {
  ADD_FOUND_TICKETS,
  LOAD_TICKETS_PORTION,
  REQUEST_SEARCH_ID,
  SET_IS_LOADING,
  SET_ORDER_BY,
  SET_SEARCH_ID,
  SET_STOPS_FILTER,
} from './types';

export const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  isLoading,
});

export const setSearchId = (id) => ({
  type: SET_SEARCH_ID,
  id,
});

export const requestSearchId = () => ({ type: REQUEST_SEARCH_ID });

export const addFoundTicket = (tickets) => ({
  type: ADD_FOUND_TICKETS,
  tickets,
});

export const loadTicketsPortion = (searchId) => ({
  type: LOAD_TICKETS_PORTION,
  searchId,
});

export const setStopsFilter = (stops) => ({
  type: SET_STOPS_FILTER,
  stopsFilter: stops,
});

export const setOrderBy = (orderBy) => ({
  type: SET_ORDER_BY,
  orderBy,
});
