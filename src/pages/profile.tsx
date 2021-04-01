import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/profile';

function Profile() {
  const { uid }: { uid: string } = useParams();

  return (
    <Layout>
      <UserProfile userId={uid} />
    </Layout>
  );
}

export default Profile;
