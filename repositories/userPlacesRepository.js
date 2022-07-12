import { fetchUserPlacesAction } from '../actions';

export const mapStateToProps = (state) => {
    return {
        userPlaces: state.userPlacesReducer
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onFetchUserPlaces: () => {
            dispatch(fetchUserPlacesAction("user-place/graphql"))
        }
    }
}
