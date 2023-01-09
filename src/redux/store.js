import { applyMiddleware, compose } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from './reducers/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

export default store;