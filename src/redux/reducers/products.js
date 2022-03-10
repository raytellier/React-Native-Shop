import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_STATE_CHANGE } from "../constants";

const initialState = {
  products: [],
  loaded: false,
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loaded: false,
        products: [],
      };

    case PRODUCT_LIST_SUCCESS:
      return {
        loaded: true,
        products: action.products,
      };

      case PRODUCT_LIST_FAIL:
      return {
        loaded: true,
        error: action.error,
      };

    // case PRODUCT_STATE_CHANGE:
    //   return {
    //     products: action.products,
    //     loaded: action.loaded,
    //   };

    default:
      return state;
  }
};
