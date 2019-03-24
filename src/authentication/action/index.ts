import axios from 'axios';
import { PROFILE } from 'src/profile/reducer/profileReducer';

import { LOGIN, LOGOUT } from '../reducer/authenticationReducer';

export const loginAction = (username: string, password: string) => {
  return async (dispatch: Function) => {
    axios.post('http://localhost:5000/login', { username, password });

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
        address: '2346 avenue Laurier, Quebec, Canada',
      },
    });
  };
};

export const signupAction = (username: string, password: string, profile: any) => {
  return async (dispatch: Function) => {
    axios.post('http://localhost:5000/register', { profile });

    dispatch({
      type: PROFILE,
      profile,
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
