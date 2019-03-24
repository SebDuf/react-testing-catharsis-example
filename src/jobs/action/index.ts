import { JOBS } from 'src/jobs/reducer/jobsReducer';

export const fetchJobs = () => {
  return async (dispatch: Function) => {
    dispatch({
      type: JOBS,
      jobs: [{
        title: 'Software Developper',
        city: 'Quebec',
        salaryRange: '50k-60k',
      },
      {
        title: 'Teacher',
        city: 'Montreal',
        salaryRange: '40k-50k',
      },
      {
        title: 'Mafia Boss',
        city: 'Rivière-du-Loup',
        salaryRange: '3k-7k',
      }],
    });
  };
};
