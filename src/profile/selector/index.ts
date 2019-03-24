import { createSelector } from 'reselect';

import { ApplicationStore } from '../../main/store/store';

const profileSelector = (state: ApplicationStore) => state.profile.profile;
export const getProfile = createSelector(profileSelector, loaded => loaded);

export const getSpecificProfile = (state: ApplicationStore, id: string) => {
  const { candidates } = state.search;

  return candidates.filter((candidate: any) => candidate.id === id);
};

