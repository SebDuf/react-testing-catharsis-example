import { LOGIN } from '../reducer/authenticationReducer';

export const loginAction = () => {
  return async (dispatch: Function) => {
    dispatch({
      type: LOGIN,
    });
  };
};

export const authenticate = () => {
  return async (dispatch: Function) => {
    dispatch({
      type: LOGIN,
    });
  };
};
