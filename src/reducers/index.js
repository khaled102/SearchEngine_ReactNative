import { combineReducers } from 'redux';
// import Reducers
import {homeReducers} from '../home';
// Redux: Root Reducer
const rootReducer = combineReducers({
    home: homeReducers
});
// Exports
export default rootReducer;