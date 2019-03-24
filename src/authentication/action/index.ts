import { PROFILE } from 'src/profile/reducer/profileReducer';

import { LOGIN, LOGOUT } from '../reducer/authenticationReducer';

export const loginAction = () => {
  return async (dispatch: Function) => {
    dispatch({
      type: LOGIN,
    });

    dispatch({
      type: PROFILE,
      profile: {
        name: 'Bob',
        lastName: 'Smith',
        id: '278534',
        type: 'seeker',
        description: 'I am a very good mafia boss please hire',
        preferences: 'Mafia Boss',
      },
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

export const logoutAction = () => {
  return async (dispatch: Function) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
