import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import UserProfile from '../components/profile';

function Profile() {
  const { uid }: { uid: string } = useParams();
  const { data: user, isLoading }: { data: any; isLoading: boolean } = useUser(
    uid
  );

  if (isLoading) return <div>Loading...</div>;

  console.log(user);
  return (
    <Layout>
      <UserProfile user={user} />
    </Layout>
  );
}

export default Profile;
