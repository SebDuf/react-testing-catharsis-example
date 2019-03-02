import { combineReducers } from 'redux';

import authentication from '../../authentication/store/authenticationReducer';

export interface Action {
  type: string;
}

export default combineReducers({
  authentication,
});
