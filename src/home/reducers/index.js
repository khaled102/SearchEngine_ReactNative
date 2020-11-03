import { combineReducers } from 'redux';
import { menuReducer } from './menu-reducer';
import { brandFilterReducer } from './brand-filter-reducer';
import { searchReducer } from './search-reducer';

export const homeReducers = combineReducers({
    menuReducer: menuReducer,
    brandFilterReducer: brandFilterReducer,
    searchReducer: searchReducer
});