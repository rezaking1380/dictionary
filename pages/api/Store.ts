import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "../../Redux/Reducer";
import RootSaga from "../../Saga/RootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
