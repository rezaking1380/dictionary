import { takeEvery } from "redux-saga/effects"
import { Actions } from "../moduls/Action.model"
import { Get } from "./Saga"

const {WORD_REQUEST} = Actions

function* RootSaga () {
    yield takeEvery(WORD_REQUEST,Get)
}

export default RootSaga