import Cookies from 'js-cookie';
import actions from './actions';
import { api } from '../../config/api/axiosService';
import { ACCESS_TOKEN, IS_AUTHENTICATED, USER } from '../../config/api/utils';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = loginObj => {
  return async dispatch => {
    dispatch(loginBegin());
    // setTimeout(() => {
    //   Cookies.set('logedIn', true);
    //   return dispatch(loginSuccess(true));
    // }, 1000);
    api('POST', 'login', '', loginObj, '')
      .then(res=>{
        console.log({res});
        localStorage.setItem(IS_AUTHENTICATED, true);
        localStorage.setItem(USER, JSON.stringify(res.data.data));
        localStorage.setItem(ACCESS_TOKEN, res.data.data.token);
        dispatch(loginSuccess(res.data.data));
      })
      .catch(err=>dispatch(loginErr(err)));
  };
};

const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
      localStorage.setItem(IS_AUTHENTICATED, false);
      localStorage.removeItem(USER);
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };
