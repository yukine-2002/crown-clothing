import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetch : false,
  errorMessager : undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START :
      return {
        ...state,
        isFetch:true
      }
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetch:false
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetch : false,
        errorMessager : action.payload

      }
    default:
      return state;
  }
};

export default shopReducer;
