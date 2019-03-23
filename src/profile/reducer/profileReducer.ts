import { Action } from '../../main/store/reducers';

export interface ProfileState {
  profile: any;
}

const initialState: ProfileState = {
  profile: null,
};

export default function reducer(state: ProfileState = initialState, action: Action): ProfileState {
  switch (action.type) {
    default:
      return state;
  }
}
