import actions from './actions';

const { CREATE_PRODUCT_BEGIN, CREATE_PRODUCT_SUCESS, CREATE_PRODUCT_ERROR, GET_PRODUCT_SUCESS } = actions;
const initState = {
  products: [],
  error: null,
};

/**
 *
 * @todo impure state mutation/explaination
 */
const productReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CREATE_PRODUCT_BEGIN:
      return {
        ...state,
      };
    case CREATE_PRODUCT_SUCESS:
      return {
        ...state,
        newObject: data,
      };
    case CREATE_PRODUCT_ERROR:
      return {
        ...state,
        err,
      };
    case GET_PRODUCT_SUCESS:
      return {
        ...state,
        products: data,
      };
    default:
      return state;
  }
};

export default productReducer;
