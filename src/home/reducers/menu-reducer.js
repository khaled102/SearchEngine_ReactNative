import { MENU_ITEMS } from '../actions/ACTION_TYPES';

const MenuInitialState = {
  status: null,
  errors: [],
  loading: false,
};

export const menuReducer = (
  state = MenuInitialState,
  action = {},
) => {
  switch (action.type) {
    case MENU_ITEMS.PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case MENU_ITEMS.SUCCESS: {
        const { response } = action.payload;
        console.log('red res ', response)
        return {
          ...state,
          loading: false,
          status: response
        }
    }
    case MENU_ITEMS.ERROR: {
      return {
        ...state,
        loading: false,
        status: null
      };
    }
    default:
      return state;
  }
};