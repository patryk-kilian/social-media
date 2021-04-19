import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import { SIGN_IN } from '../constants/routes';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { authUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? <Component {...props} /> : <Redirect to={SIGN_IN} />
      }
    />
  );
};

export default PrivateRoute;
