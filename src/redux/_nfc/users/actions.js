const actions = {
  CREATE_USER_BEGIN: 'CREATE_USER_BEGIN',
  CREATE_USER_SUCESS: 'CREATE_USER_SUCESS',
  CREATE_USER_ERROR: 'CREATE_USER_ERROR',
  GET_USER_BEGIN: 'GET_USER_BEGIN',
  GET_USER_SUCESS: 'GET_USER_SUCESS',
  GET_USER_ERROR: 'GET_USER_ERROR',
  EDIT_USER_BEGIN: 'EDIT_USER_BEGIN',
  EDIT_USER_SUCESS: 'EDIT_USER_SUCESS',
  EDIT_USER_ERROR: 'EDIT_USER_ERROR',
  DELETE_USER_BEGIN: 'DELETE_USER_BEGIN',
  DELETE_USER_SUCESS: 'DELETE_USER_SUCESS',
  DELETE_USER_ERROR: 'DELETE_USER_ERROR',

  createUserBegin: () => {
    return {
      type: actions.CREATE_USER_BEGIN,
    };
  },
  createUserSucess: newObject => {
    return {
      type: actions.CREATE_USER_SUCESS,
      data: newObject,
    };
  },
  createUserErr: err => {
    return {
      type: actions.CREATE_USER_ERROR,
      data: err,
    };
  },
  getAllUsersSucess: data => {
    return {
      type: actions.GET_USER_SUCESS,
      data,
    };
  },
};
export default actions;
