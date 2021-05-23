import actions from './actions';
import { api } from '../../../config/api/axiosService';
// import productCategoryData from '../../../demoData/nfc/productCategoryData.json';

const { createProductCategorySucess, getAllProductCategoriesSucess, editProductCategorySucess } = actions;
const getAllProductCategories = () => {
  return dispatch => {
    // dispatch(getAllProductCategoriesSucess(productCategoryData));
    api('GET', 'categories', '', '', '')
      .then(res => dispatch(getAllProductCategoriesSucess(res.data.data)))
      .catch(err => console.log(err));
  };
};
const createProductCategory = obj => {
  return async dispatch => {
    // dispatch(createProductCategorySucess(obj));
    api('POST', 'categories', '', obj, '')
      .then(() => {
        dispatch(createProductCategorySucess(obj));
        dispatch(getAllProductCategories());
      })
      .catch(err => console.log(err));
  };
};

const editProductCategory = obj => {
  return async dispatch => {
    // dispatch(editProductCategorySucess(obj));
    api('PUT', 'categories', '', obj, obj.id)
      .then(() => {
        dispatch(editProductCategorySucess(obj));
        dispatch(getAllProductCategories());
      })
      .catch(err => console.log(err));
  };
};
export { createProductCategory, getAllProductCategories, editProductCategory };
