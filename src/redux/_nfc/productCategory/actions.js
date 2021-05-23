const actions = {
  CREATE_CATEGORY_BEGIN: 'CREATE_CATEGORY_BEGIN',
  CREATE_CATEGORY_SUCESS: 'CREATE_CATEGORY_SUCESS',
  CREATE_CATEGORY_ERROR: 'CREATE_CATEGORY_ERROR',
  GET_CATEGORY_BEGIN: 'GET_CATEGORY_BEGIN',
  GET_CATEGORY_SUCESS: 'GET_CATEGORY_SUCESS',
  GET_CATEGORY_ERROR: 'GET_CATEGORY_ERROR',
  EDIT_CATEGORY_BEGIN: 'EDIT_CATEGORY_BEGIN',
  EDIT_CATEGORY_SUCESS: 'EDIT_CATEGORY_SUCESS',
  EDIT_CATEGORY_ERROR: 'EDIT_CATEGORY_ERROR',
  DELETE_CATEGORY_BEGIN: 'DELETE_CATEGORY_BEGIN',
  DELETE_CATEGORY_SUCESS: 'DELETE_CATEGORY_SUCESS',
  DELETE_CATEGORY_ERROR: 'DELETE_CATEGORY_ERROR',

  createProductCategoryBegin: () => {
    return {
      type: actions.CREATE_CATEGORY_BEGIN,
    };
  },
  createProductCategorySucess: newObject => {
    return {
      type: actions.CREATE_CATEGORY_SUCESS,
      data: newObject,
    };
  },
  createProductCategoryErr: err => {
    return {
      type: actions.CREATE_CATEGORY_ERROR,
      data: err,
    };
  },
  getAllProductCategoriesSucess: data => {
    return {
      type: actions.GET_CATEGORY_SUCESS,
      data,
    };
  },

  editProductCategorySucess: editObj => {
    return {
      type: actions.EDIT_CATEGORY_SUCESS,
      data: editObj,
    };
  },
  editProductCategoryErr: err => {
    return {
      type: actions.EDIT_CATEGORY_ERROR,
      data: err,
    };
  },
  deleteProductCategory: deleteId => {
    return {
      type: actions.DELETE_CATEGORY_SUCESS,
      data: deleteId,
    };
  },
};

export default actions;
