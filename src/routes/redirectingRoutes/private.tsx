import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import store from '~/store';

interface IPrivateRoute extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({
  component: Component,
  ...rest
}) => {
  const { signedIn } = store.getState().auth;

  return (
    <Route
      {...rest}
      render={props => {
        return signedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
