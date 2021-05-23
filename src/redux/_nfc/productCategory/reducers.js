import actions from './actions';

const { CREATE_CATEGORY_BEGIN, CREATE_CATEGORY_SUCESS, CREATE_CATEGORY_ERROR, GET_CATEGORY_SUCESS } = actions;
const initState = {
  productCategories: [],
  error: null,
};

/**
 *
 * @todo impure state mutation/explaination
 */
const productCategoryReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CREATE_CATEGORY_BEGIN:
      return {
        ...state,
      };
    case CREATE_CATEGORY_SUCESS:
      return {
        ...state,
        newObject: data,
      };
    case CREATE_CATEGORY_ERROR:
      return {
        ...state,
        err,
      };
    case GET_CATEGORY_SUCESS:
      return {
        ...state,
        productCategories: data,
      };
    default:
      return state;
  }
};

export default productCategoryReducer;
