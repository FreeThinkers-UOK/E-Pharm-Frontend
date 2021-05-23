import actions from './actions';

const { CREATE_USER_BEGIN, CREATE_USER_SUCESS, CREATE_USER_ERROR, GET_USER_SUCESS } = actions;
const initialState = {
  userList: [],
  error: null,
};
const userReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CREATE_USER_BEGIN:
      return {
        ...state,
      };
    case CREATE_USER_SUCESS:
      return {
        ...state,
        newObject: data,
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        err,
      };
    case GET_USER_SUCESS:
      return {
        ...state,
        userList: data,
      };
    default:
      return state;
  }
};

export default userReducer;
