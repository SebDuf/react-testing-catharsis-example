import { PROFILE } from 'src/profile/reducer/profileReducer';

export const saveProfile = (profile: any) => {
  return async (dispatch: Function) => {
    dispatch({
      type: PROFILE,
      profile,
    });
  };
};

