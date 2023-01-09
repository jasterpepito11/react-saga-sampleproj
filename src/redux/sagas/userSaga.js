import {takeLatest, put, call} from 'redux-saga/effects';
import { getUsersApi } from '../../constants/api';
import * as types from '../types';

export function* userSaga() {
    yield takeLatest(types.GET_USERS_REQUESTED, handleGetUsers);
}

function* handleGetUsers() {
    try {
        const users = yield call(getUsersApi);
        yield put({type: types.GET_USERS_SUCCESS, payload: users})
    } catch (error) {
        yield put({type: types.GET_USERS_FAILED, message: error.message});
    }
    

}

export default userSaga;