import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import usePosts from '../hooks/usePosts';
import { focusManager } from 'react-query';
import { userTypes, postTypes } from '../types';
import Post from '../components/post';

function PostsList({ user }: { user: userTypes }) {
  const { data: posts, isLoading } = usePosts(user.userId, user.following);

  useEffect(() => {
    focusManager.setFocused(true);
  }, [user]);

  if (isLoading) return <div>loading ...</div>;

  return (
    <Box maxW='600px' mx='auto' px='4'>
      {posts?.map((post: postTypes) => (
        <Post key={post.postId} post={post} />
      ))}
    </Box>
  );
}

export default PostsList;
