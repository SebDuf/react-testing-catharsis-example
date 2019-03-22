import React from 'react';
import { Route, RouteComponentProps, RouteProps, withRouter } from 'react-router-dom';
import TopNavigationBar from 'src/dashboard/component/TopNavigationBar';

interface Props {
  component: typeof React.Component;
}

type AllProps = Props & RouteProps & RouteComponentProps;

function DefaultRoute({ component: Component, ...rest }: AllProps): JSX.Element {
  return (
    <Route
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

const componentWithRouter = withRouter(DefaultRoute);

export default componentWithRouter;
