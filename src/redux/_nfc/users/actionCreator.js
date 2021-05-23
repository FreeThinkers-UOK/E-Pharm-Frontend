import actions from './actions';
import { api } from '../../../config/api/axiosService';
import userData from '../../../demoData/nfc/usersData.json';
import { ACCESS_TOKEN } from '../../../config/api/utils';

const { createUserSucess, getAllUsersSucess } = actions;
const createUser = obj => {
  return async dispatch => {
    dispatch(createUserSucess(obj));
    // api('POST', 'users', '', obj, '')
    //   .then(() => dispatch(createUserSucess()))
    //   .catch(err => dispatch(createProductErr(err)));
  };
};
const getAllUsers = () => {
  return dispatch => {
    api('GET', 'users', localStorage.getItem(ACCESS_TOKEN), '', '')
      .then(res => {
        console.log({res})
        dispatch(getAllUsersSucess(res.data.data));
    })
      .catch(err => console.log(err));
  };
};
export { createUser, getAllUsers };
