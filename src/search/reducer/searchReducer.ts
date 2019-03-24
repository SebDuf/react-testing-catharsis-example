export const CANDIDATE_SEARCH = 'profile/CANDIDATE_SEARCH';

export interface SearchState {
  candidates: any;
}

const initialState: SearchState = {
  candidates: [],
};

export default function reducer(state: SearchState = initialState, action: any): SearchState {
  switch (action.type) {
    case CANDIDATE_SEARCH:
      return {
        ...state,
        candidates: action.candidates,
      };

    default:
      return state;
  }
}
