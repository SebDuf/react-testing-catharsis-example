export const PROFILE = 'profile/PROFILE';

export interface ProfileState {
  profile: any;
}

const initialState: ProfileState = {
  profile: null,
};

export default function reducer(state: ProfileState = initialState, action: any): ProfileState {
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
}
