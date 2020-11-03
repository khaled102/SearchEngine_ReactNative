import { BRAND_FILTER } from '../actions/ACTION_TYPES';

const BrandFilterInitialState = {
  brand: null,
  errors: [],
  loading: false,
};

export const brandFilterReducer = (
  state = BrandFilterInitialState,
  action = {},
) => {
  switch (action.type) {
    case BRAND_FILTER.PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case BRAND_FILTER.SUCCESS: {
        const { response } = action.payload;
        return {
          ...state,
          loading: false,
          brand: response
        }
    }
    case BRAND_FILTER.ERROR: {
      return {
        ...state,
        loading: false,
        brand: null
      };
    }
    default:
      return state;
  }
};