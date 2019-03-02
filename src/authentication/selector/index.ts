import { createSelector } from 'reselect';

import { ApplicationStore } from '../../main/store/store';

const authenticatedSelector = (state: ApplicationStore) => state.authentication.authenticated;
export const getAuthenticated = createSelector(authenticatedSelector, loaded => loaded);

