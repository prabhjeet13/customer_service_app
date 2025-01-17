import profileReducer from '../slices/profileSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    profile : profileReducer,
});
export default rootReducer;