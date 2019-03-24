import { JOBS } from 'src/jobs/reducer/jobsReducer';

export const fetchJobs = () => {
  return async (dispatch: Function) => {
    dispatch({
      type: JOBS,
      jobs: [{
        title: 'Software Developper',
        city: 'Quebec',
        salaryRange: '50k-60k',
      }],
    });
  };
};
