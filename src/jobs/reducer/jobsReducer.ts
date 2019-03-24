export const JOBS = 'jobs/JOBS';

export interface JobsState {
  jobs: any;
}

const initialState: JobsState = {
  jobs: [],
};

export default function reducer(state: JobsState = initialState, action: any): JobsState {
  switch (action.type) {
    case JOBS:
      return {
        ...state,
        jobs: action.jobs,
      };

    default:
      return state;
  }
}
