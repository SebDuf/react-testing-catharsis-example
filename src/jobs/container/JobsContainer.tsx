import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobs } from 'src/jobs/selector';
import { fetchJobs } from 'src/jobs/action';

interface Props {
  actions: {
    getJobs: () => void;
  };
  jobs: any[];
}

class JobsContainer extends Component<Props> {

  public componentDidMount(): void {
    this.props.actions.getJobs();
  }

  public render(): JSX.Element {
    return (
      <div>
        {this.props.jobs.map(job =>
          <pre>
            {JSON.stringify(job, null, 2)}
          </pre>)}
      </div>
    );
  }

}

function mapStateToProps(state: any) {
  return {
    jobs: getJobs(state),
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      getJobs: () => dispatch(fetchJobs()),
    },
  };
}

const componentWithRedux = connect(mapStateToProps, mapDispatchToProps)(JobsContainer);

export { componentWithRedux as JobsContainer };
