import { Action } from '../../main/store/reducers';

export const LOGIN = 'authentication/LOGIN';
export const LOGOUT = 'authentication/LOGOUT';

export interface AuthenticationState {
  authenticated: boolean;
}

const initialState: AuthenticationState = {
  authenticated: false,
};

export default function reducer(state: AuthenticationState = initialState, action: Action): AuthenticationState {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        authenticated: true,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        authenticated: false,
      };
    }

    default:
      return state;
  }
}
