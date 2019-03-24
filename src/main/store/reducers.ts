import { combineReducers } from 'redux';

import authentication from '../../authentication/reducer/authenticationReducer';
import profile from '../../profile/reducer/profileReducer';
import search from '../../search/reducer/searchReducer';
import jobs from '../../jobs/reducer/jobsReducer';

export interface Action {
  type: string;
}

export default combineReducers({
  authentication,
  profile,
  search,
  jobs,
});
