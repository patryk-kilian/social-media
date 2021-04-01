import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/profile';
import { useAuth } from '../context/auth-context';
import { SIGN_IN } from '../constants/routes';
import { useHistory } from 'react-router-dom';

function Profile() {
  const { uid }: { uid: string } = useParams();

  const { authUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!authUser) history.push(SIGN_IN);
  }, [authUser]);

  return (
    <Layout>
      <UserProfile userId={uid} />
    </Layout>
  );
}

export default Profile;
