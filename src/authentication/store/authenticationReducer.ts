import { Action } from '../../main/store/reducers';

interface AuthenticationState {
  authenticated: boolean;
}

const initialState: AuthenticationState = {
  authenticated: false,
};

export default function reducer(state: AuthenticationState = initialState, action: Action): AuthenticationState {
  switch (action.type) {
    default:
      return state;
  }
}
