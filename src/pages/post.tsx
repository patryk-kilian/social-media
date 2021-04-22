import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Post from '../components/post';
import AddComment from '../components/post/AddComment';
import usePost from '../hooks/usePost';
import { useActiveUser } from '../context/active-user';
import Comments from '../components/post/Comments';
import PostSkeleton from '../components/skeleton/PostSkeleton';

function PostPage() {
  const { postid }: { postid: string } = useParams();
  const { data: post, isLoading } = usePost(postid);

  const { activeUser } = useActiveUser();

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
