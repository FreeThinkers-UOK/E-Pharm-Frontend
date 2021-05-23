const actions = {
  CREATE_PRODUCT_BEGIN: 'CREATE_PRODUCT_BEGIN',
  CREATE_PRODUCT_SUCESS: 'CREATE_PRODUCT_SUCESS',
  GET_PRODUCT_SUCESS: 'GET_PRODUCT_SUCESS',
  GET_PRODUCT_ERROR: 'GET_PRODUCT_ERROR',
  EDIT_PRODUCT_BEGIN: 'EDIT_PRODUCT_BEGIN',
  EDIT_PRODUCT_SUCESS: 'EDIT_PRODUCT_SUCESS',
  EDIT_PRODUCT_ERROR: 'EDIT_PRODUCT_ERROR',
  DELETE_PRODUCT_BEGIN: 'DELETE_PRODUCT_BEGIN',
  DELETE_PRODUCT_SUCESS: 'DELETE_PRODUCT_SUCESS',
  DELETE_PRODUCT_ERROR: 'DELETE_PRODUCT_ERROR',

  createProductBegin: () => {
    return {
      type: actions.CREATE_PRODUCT_BEGIN,
    };
  },
  createProductSucess: newObject => {
    return {
      type: actions.CREATE_PRODUCT_SUCESS,
      data: newObject,
    };
  },
  createProductErr: err => {
    return {
      type: actions.CREATE_PRODUCT_ERROR,
      data: err,
    };
  },
  getAllProductsSucess: data => {
    return {
      type: actions.GET_PRODUCT_SUCESS,
      data,
    };
  },

  editProductSucess: editObj => {
    return {
      type: actions.EDIT_PRODUCT_SUCESS,
      data: editObj,
    };
  },
  editProductErr: err => {
    return {
      type: actions.EDIT_PRODUCT_ERROR,
      data: err,
    };
  },
  deleteProduct: deleteId => {
    return {
      type: actions.DELETE_PRODUCT_SUCESS,
      data: deleteId,
    };
  },
};

export default actions;
