import { combineReducers } from 'redux';

import authentication from '../../authentication/reducer/authenticationReducer';

export interface Action {
  type: string;
}

export default combineReducers({
  authentication,
});
