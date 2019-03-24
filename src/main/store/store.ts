import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ProfileState } from 'src/profile/reducer/profileReducer';
import { SearchState } from 'src/search/reducer/searchReducer';

import { AuthenticationState } from '../../authentication/reducer/authenticationReducer';

import rootReducer from './reducers';

export interface ApplicationStore {
  authentication: AuthenticationState;
  profile: ProfileState;
  search: SearchState;
}

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);
