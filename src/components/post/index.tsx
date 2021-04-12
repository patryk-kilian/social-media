import { Flex, Box, Image, SkeletonCircle, Text } from '@chakra-ui/react';
import { postTypes } from '../../types';
import Header from './Header';
import Actions from './Actions';
import Content from './Content';

function Post({ post }: { post: postTypes }) {
  const { userAvatar, postText, username, dateCreated, likes, postId } = post;

  return (
    <Box as='article' p='2'>
      <Box border='2px solid' borderColor='gray.100' borderRadius='md'>
        <Header
          userAvatar={userAvatar}
          username={username}
          dateCreated={dateCreated}
        />

        <Content postText={postText} />
        <Actions postId={postId} likes={likes} />
      </Box>
    </Box>
  );
}

export default Post;
