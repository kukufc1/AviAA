import React from 'react';
import { createRoot } from 'react-dom/client'; // Обновленный импорт
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from '@reduxjs/toolkit'; // Импортируйте configureStore

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

// Используйте configureStore вместо createStore
const store = configureStore({
  reducer,
  preloadedState: defaultState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware), // Добавьте сагу в middleware
});

sagaMiddleware.run(rootSaga);

// Создайте корень с помощью createRoot из 'react-dom/client'
const container = document.getElementById('root');
const root = createRoot(container); // Инициализация корня

// Рендеринг приложения с помощью root.render вместо ReactDOM.render
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
