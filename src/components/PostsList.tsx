import { Box, Text, Link } from '@chakra-ui/react';
import { useEffect } from 'react';
import { focusManager } from 'react-query';
import { UserTypes, PostTypes } from '../types';
import { USERS } from '../constants/routes';
import { Link as RouterLink } from 'react-router-dom';
import usePosts from '../hooks/usePosts';
import PostsListSkeleton from '../components/skeleton/PostsListSkeleton';
import Post from '../components/post';

function PostsList({ user }: { user: UserTypes }) {
  const { data: posts, isLoading } = usePosts(user.userId, user.following);

  useEffect(() => {
    focusManager.setFocused(true);
  }, [user]);

  if (isLoading) return <PostsListSkeleton />;

  return (
    <Box maxW='600px' mx='auto' px={['2', '4']}>
      {posts?.length === 0 ? (
        <Text textAlign='center' fontSize='2xl'>
          Follow some
          <Link as={RouterLink} to={USERS} color='purple.500' fontWeight='bold'>
            &nbsp;users&nbsp;
          </Link>
          or add post.
        </Text>
      ) : (
        posts?.map((post: PostTypes) => <Post key={post.postId} post={post} />)
      )}
    </Box>
  );
}

export default PostsList;
