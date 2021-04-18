import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import { SIGN_IN } from '../constants/routes';
import { useHistory } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Post from '../components/post';
import AddComment from '../components/post/AddComment';
import usePost from '../hooks/usePost';
import { useActiveUser } from '../context/active-user';
import Comments from '../components/post/Comments';
import PostSkeleton from '../components/skeleton/PostSkeleton';

function PostPage() {
  const { postid }: { postid: string } = useParams();
  const { data: post, isLoading }: any = usePost(postid);

  const { authUser } = useAuth();
  const { activeUser } = useActiveUser();
  const history = useHistory();

  useEffect(() => {
    if (!authUser) history.push(SIGN_IN);
  }, [authUser, history]);

  return (
    <Layout>
      <Box maxW='600px' mx='auto' px={['0', '4']} py={['6', '8', '12']}>
        {isLoading ? <PostSkeleton /> : <Post post={post} />}
        <AddComment user={activeUser} postDocId={postid} />
        <Comments postId={postid} />
      </Box>
    </Layout>
  );
}

export default PostPage;
