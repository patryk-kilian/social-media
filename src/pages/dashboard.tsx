import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/auth-context';
import { SIGN_IN } from '../constants/routes';
import { useHistory } from 'react-router-dom';
import AddPost from '../components/AddPost';
import { useActiveUser } from '../context/active-user';
import PostsList from '../components/PostsList';
import AddPostSkeleton from '../components/skeleton/AddPostSkeleton';

function Dashboard() {
  const { authUser } = useAuth();
  const { activeUser, isLoading } = useActiveUser();
  const history = useHistory();

  useEffect(() => {
    if (!authUser) history.push(SIGN_IN);
  }, [authUser, history]);

  return (
    <Layout>
      {isLoading ? (
        <AddPostSkeleton />
      ) : (
        <>
          <AddPost user={activeUser} />
          <PostsList user={activeUser} />
        </>
      )}
    </Layout>
  );
}

export default Dashboard;
