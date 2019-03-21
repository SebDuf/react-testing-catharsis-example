import React from 'react';
import { RouteComponentProps, RouteProps, withRouter } from 'react-router-dom';
import TopNavigationBar from 'src/dashboard/component/TopNavigationBar';

import PrivateRoute from './PrivateRoute';

interface Props {
  component: typeof React.Component;
}

type AllProps = Props & RouteProps & RouteComponentProps;

function DefaultPrivateRoute({ component: Component, ...rest }: AllProps): JSX.Element {
  return (
    <PrivateRoute
      {...rest}
      render={matchProps => (
        <div>
          <TopNavigationBar
            active={rest.location.pathname.replace('/', '') || 'home'}
            onChange={(tab: string) => console.log('lol', tab)}
          />
          <Component {...matchProps} />
        </div>
      )}
    />);
}

const componentWithRouter = withRouter(DefaultPrivateRoute);

export default componentWithRouter;
