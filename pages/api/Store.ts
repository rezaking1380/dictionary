import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer, { initState } from "../../Redux/Reducer";
import RootSaga from "../../Saga/RootSaga";
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: Reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  
  sagaMiddleware.run(RootSaga);

  export const action = (type : any) => store.dispatch({type})

export default store;
