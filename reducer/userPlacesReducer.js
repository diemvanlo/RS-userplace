import {
    FETCH_USER_PLACES_FAILED,
    FETCH_USER_PLACES_SUCCEEDED,
} from '../actions/actionType';

const userPlacesReducer = (userPlaces = '', action) => {
    switch (action.type) {
        case FETCH_USER_PLACES_SUCCEEDED:
            userPlaces = action.data.data.allPlaces;
            return userPlaces;
        case FETCH_USER_PLACES_FAILED:
            return [];
        default:
            return userPlaces;
    }
};

export default userPlacesReducer;