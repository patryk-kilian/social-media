import { Box, Heading, Text } from '@chakra-ui/react';
import Post from '../post';
import usePosts from '../../hooks/useUserPosts';
import { postTypes } from '../../types';

function UserPosts({ userId }: { userId: string }) {
  const { data: posts, isLoading } = usePosts(userId);

  if (isLoading) return <div>loading</div>;

  return (
    <Box px='10'>
      <Heading
        size='lg'
        as='h3'
        py='6'
        borderBottom='2px solid'
        borderColor='purple.200'
      >
        Posts:
      </Heading>
      {posts?.length === 0 ? (
        <Text pt='6' fontSize='xl'>
          There is no posts here.
        </Text>
      ) : (
        <Box maxW='600px' mx='auto' px='4' pt='6'>
          {posts?.map((post: postTypes) => (
            <Post key={post.postId} post={post} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default UserPosts;
