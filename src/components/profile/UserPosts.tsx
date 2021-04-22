import { Box, Heading, Text } from '@chakra-ui/react';
import { PostTypes } from '../../types';
import usePosts from '../../hooks/useUserPosts';
import PostsListSkeleton from '../../components/skeleton/PostsListSkeleton';
import Post from '../post';

function UserPosts({ userId }: { userId: string }) {
  const { data: posts, isLoading } = usePosts(userId);

  return (
    <Box px={['2', '2', '10']}>
      <Heading
        size='lg'
        as='h3'
        py={['2', '4', '6']}
        borderBottom='2px solid'
        borderColor='purple.200'
      >
        Posts:
      </Heading>
      {posts?.length === 0 ? (
        <Text pt='6' fontSize='xl'>
          There is no posts here.
        </Text>
      ) : isLoading ? (
        <PostsListSkeleton />
      ) : (
        <Box maxW='600px' mx='auto' px={['0', '4']} pt='6'>
          {posts?.map((post: PostTypes) => (
            <Post key={post.postId} post={post} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default UserPosts;
