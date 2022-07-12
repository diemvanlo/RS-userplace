import { combineReducers } from 'redux';
import userPlacesReducer from './userPlacesReducer';

const allReducers = combineReducers({ userPlacesReducer });
export default allReducers;
