import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import store from '~/store';

interface IPublicRoute extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const PublicRoute: React.FC<IPublicRoute> = ({
  component: Component,
  ...rest
}) => {
  const { signedIn } = store.getState().auth;

  return (
    <Route
      {...rest}
      render={props => {
        return !signedIn ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default PublicRoute;
