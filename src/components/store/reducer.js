import { ADD_FOUND_TICKETS, SET_IS_LOADING, SET_ORDER_BY, SET_SEARCH_ID, SET_STOPS_FILTER } from './types';

const reducer = {
  [SET_IS_LOADING](state, payload) {
    const { isLoading } = payload;
    return { ...state, isLoading: isLoading };
  },

  [SET_SEARCH_ID](state, payload) {
    return { ...state, searchId: payload.id };
  },

  [ADD_FOUND_TICKETS](state, payload) {
    // Проверяем, что payload.tickets является массивом
    const tickets = Array.isArray(payload.tickets) ? payload.tickets : [];
    return { ...state, tickets: [...state.tickets, ...tickets] };
  },

  [SET_STOPS_FILTER](state, payload) {
    const { stopsFilter } = payload;
    return { ...state, stopsFilter };
  },

  [SET_ORDER_BY](state, payload) {
    const { orderBy } = payload;
    return { ...state, orderBy };
  },
};

export default function (state, action) {
  const { type, ...payload } = action;
  return Object.prototype.hasOwnProperty.call(reducer, type) ? reducer[type](state, payload) : state;
}
