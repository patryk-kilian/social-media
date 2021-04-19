import Layout from '../components/Layout';
import AddPost from '../components/AddPost';
import { useActiveUser } from '../context/active-user';
import PostsList from '../components/PostsList';
import AddPostSkeleton from '../components/skeleton/AddPostSkeleton';

function Dashboard() {
  const { activeUser, isLoading } = useActiveUser();

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
