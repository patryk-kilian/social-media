import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/auth-context';
import { SIGN_IN } from '../constants/routes';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const { authUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!authUser) history.push(SIGN_IN);
  }, [authUser]);

  return (
    <Layout>
      <p>dashboard</p>
    </Layout>
  );
}

export default Dashboard;
