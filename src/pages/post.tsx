import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import { SIGN_IN } from '../constants/routes';
import { useHistory } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Post from '../components/post';
import usePost from '../hooks/usePost';

function PostPage() {
  const { postid }: { postid: string } = useParams();
  const { data: post, isLoading }: any = usePost(postid);

  const { authUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!authUser) history.push(SIGN_IN);
  }, [authUser, history]);

  if (isLoading) return <div>loading...</div>;

  return (
    <Layout>
      <Box maxW='600px' mx='auto' px='4' py='12'>
        <Post post={post} />
      </Box>
    </Layout>
  );
}

export default PostPage;
