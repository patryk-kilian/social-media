import { Box, Text, Link } from '@chakra-ui/react';
import { useEffect } from 'react';
import usePosts from '../hooks/usePosts';
import { focusManager } from 'react-query';
import { userTypes, postTypes } from '../types';
import Post from '../components/post';
import PostsListSkeleton from '../components/skeleton/PostsListSkeleton';
import { USERS } from '../constants/routes';
import { Link as RouterLink } from 'react-router-dom';

function PostsList({ user }: { user: userTypes }) {
  const { data: posts, isLoading } = usePosts(user.userId, user.following);

  useEffect(() => {
    focusManager.setFocused(true);
  }, [user]);

  if (isLoading) return <PostsListSkeleton />;

  return (
    <Box maxW='600px' mx='auto' px='4'>
      {posts?.length === 0 ? (
        <Text textAlign='center' fontSize='2xl'>
          Follow some
          <Link as={RouterLink} to={USERS} color='purple.500' fontWeight='bold'>
            &nbsp;users&nbsp;
          </Link>
          or add post.
        </Text>
      ) : (
        posts?.map((post: postTypes) => <Post key={post.postId} post={post} />)
      )}
    </Box>
  );
}

export default PostsList;
