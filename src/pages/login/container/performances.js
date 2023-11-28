import actions from "./actions";
import {
   login,
   register,
   deleteAccount
} from "./api";

const loginPerformances = dispatch => {
  const loginContext = async data => {
    try {
      const result = await login(data);
      if (result) {
        localStorage.setItem('token', result.token);
        dispatch(actions.setToken(result.token))
      }
    } catch (e) {
      throw (e);
    }
  }

  const registerContext = async data => {
    try {
      const result = await register(data);
        console.log('result2', result)
        if (result) {
        localStorage.setItem('token', result.token);
        console.log('result', result)
        dispatch(actions.setToken(result.token))
      }
    } catch (e) {
      console.error(e);
    }
  }
  
  const deleteAccountContext = async () => {
    try {
      await deleteAccount();
    } catch (e) {
      console.error(e);
    }
  }

  const setTokenContext = (value) => {
    dispatch(actions.setToken(value))
  }
  return {
    loginContext,
    registerContext,
    setTokenContext,
    deleteAccountContext
  };
};

export default loginPerformances;
