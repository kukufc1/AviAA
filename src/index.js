import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import './index.css';
import 'regenerator-runtime/runtime';
import reducer from './components/store/reducer';
import { rootSaga } from './components/store/sagas';
import App from './components/App/App';

const defaultState = {
  isLoading: true,
  tickets: [],
  searchId: null,
  stopsFilter: [],
  orderBy: 'price',
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  preloadedState: defaultState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
