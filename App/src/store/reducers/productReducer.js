import actiontypes from "../actiontypes";

const initState = {
  product: null,
};

const productCatalogReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes().product.set:
      return {
        ...state,
        product: action.payload,
      };

    case actiontypes().product.clear:
      return {
        ...state,
        product: null,
      };

    default:
      return state;
  }
};

export default productCatalogReducer;
