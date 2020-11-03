import { SEARCH } from '../actions/ACTION_TYPES';

const SearchInitialState = {
  search_input: null,
  errors: [],
  loading: false,
};

export const searchReducer = (
  state = SearchInitialState,
  action = {},
) => {
  switch (action.type) {
    case SEARCH.PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SEARCH.SUCCESS: {
        const { response } = action.payload;
        return {
          ...state,
          loading: false,
          search_input: response
        }
    }
    case SEARCH.ERROR: {
      return {
        ...state,
        loading: false,
        search_input: null
      };
    }
    default:
      return state;
  }
};