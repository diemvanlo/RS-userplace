import { FETCH_USER_PLACES } from "../actions/actionType"
import { postRequest, pushRequest } from './coreApiService';
import { takeEvery } from '@redux-saga/core/effects';

export function* fetchUserPlaces() {
    yield takeEvery(FETCH_USER_PLACES, pushRequest);
}