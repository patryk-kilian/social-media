import { useEffect } from 'react';
import Layout from '../components/Layout';
import AllUsers from '../components/users';
import { useAuth } from '../context/auth-context';
import { SIGN_IN } from '../constants/routes';
import { useHistory } from 'react-router-dom';

function Users() {
  const { authUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!authUser) history.push(SIGN_IN);
  }, [authUser]);

  return (
    <Layout>
      <AllUsers />
    </Layout>
  );
}

export default Users;
