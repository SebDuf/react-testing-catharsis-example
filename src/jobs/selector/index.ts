import { createSelector } from 'reselect';
import { JobsState } from 'src/jobs/reducer/jobsReducer';

const jobsSelector = (state: JobsState) => state.jobs.jobs;
export const getJobs = createSelector(jobsSelector, loaded => loaded);

