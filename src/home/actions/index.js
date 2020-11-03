import { createAction } from '../../util/action.helpers';
import {
    MENU_ITEMS,
    BRAND_FILTER,
    SEARCH
} from './ACTION_TYPES';


export const menuItems = createAction(MENU_ITEMS.ACTION, 'show');
export const menuItemsPending = createAction(MENU_ITEMS.PENDING);
export const menuItemsSuccess = createAction(MENU_ITEMS.SUCCESS, 'response');
export const menuItemsError = createAction(MENU_ITEMS.ERROR, 'error');



export const brandFilter = createAction(BRAND_FILTER.ACTION, 'brand');
export const brandFilterPending = createAction(BRAND_FILTER.PENDING);
export const brandFilterSuccess = createAction(BRAND_FILTER.SUCCESS, 'response');
export const brandFilterError = createAction(BRAND_FILTER.ERROR, 'error');



export const search = createAction(SEARCH.ACTION, 'input');
export const searchPending = createAction(SEARCH.PENDING);
export const searchSuccess = createAction(SEARCH.SUCCESS, 'response');
export const searchError = createAction(SEARCH.ERROR, 'error');
