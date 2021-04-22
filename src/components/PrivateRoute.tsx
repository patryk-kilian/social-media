import { useAuth } from '../context/auth-context';
import { SIGN_IN } from '../constants/routes';
import { Redirect, Route, RouteProps } from 'react-router';

export default function ProtectedRoute({ ...routeProps }: RouteProps) {
  const { authUser } = useAuth();

  if (authUser) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={SIGN_IN} />;
  }
}
