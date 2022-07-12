import {FETCH_USER_PLACES, FETCH_USER_PLACES_SUCCEEDED, FETCH_USER_PLACES_FAILED} from './actionType';

export const fetchUserPlacesAction = (suffix) => {
    return {
        type: FETCH_USER_PLACES,
        method: 'post',
        suffix,
        fetchSuccessType: FETCH_USER_PLACES_SUCCEEDED,
        fetchFaildType: FETCH_USER_PLACES_FAILED
    }
}