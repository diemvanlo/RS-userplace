import { all } from 'redux-saga/effects';
import { fetchUserPlaces } from './userPlacesService'

export default function* rootSaga() {
    yield all([fetchUserPlaces()]);
}