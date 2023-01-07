
import axios from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { Actions } from "../moduls/Action.model";
import { word } from '../moduls/model';
import WordService from '../Service/Word';

const {WORD_SUCCESS,WORD_FAIL} = Actions

const {getWord} = new WordService(axios)

export function* Get (action : Actions.Action<string>) {
    const get = action.payload
    try {
        const word : word = yield call(getWord, get)
        yield put({type: WORD_SUCCESS,payload: word})
    } catch (error:any) {
        yield put({type: WORD_FAIL,payload: error.message})
    }
}