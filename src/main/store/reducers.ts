import { combineReducers } from 'redux';

import authentication from '../../authentication/reducer/authenticationReducer';
import profile from '../../profile/reducer/profileReducer';

export interface Action {
  type: string;
}

export default combineReducers({
  authentication,
  profile,
});
