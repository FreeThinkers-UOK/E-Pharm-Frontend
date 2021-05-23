import actions from './actions';
import { api } from '../../../config/api/axiosService';
// import productData from '../../../demoData/nfc/productData.json';

const { createProductSucess, createProductErr, getAllProductsSucess, editProductSucess, editProductErr } = actions;
const getAllProducts = () => {
  return dispatch => {
    // dispatch(getAllProductsSucess(productData));
    api('GET', 'products', '', '', '')
      .then(res => dispatch(getAllProductsSucess(res.data.data)))
      .catch(err => console.log(err));
  };
};
const createProduct = obj => {
  return async dispatch => {
    // dispatch(createProductSucess(obj));
    api('POST', 'products', '', obj, '')
      .then(() => {
        dispatch(createProductSucess());
        dispatch(getAllProducts());
      })
      .catch(err => dispatch(createProductErr(err)));
  };
};

const editProduct = obj => {
  return async dispatch => {
    // dispatch(editProductSucess(obj));
    api('PUT', 'products', '', obj, obj.id)
      .then(() => {
        dispatch(editProductSucess());
        dispatch(getAllProducts());
      })
      .catch(err => dispatch(editProductErr(err)));
  };
};
export { createProduct, getAllProducts, editProduct };
