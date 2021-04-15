import { Flex, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react';

function CommentSkeleton() {
  return (
    <Flex maxW='600px' mx='auto' py='4' px='4'>
      <SkeletonCircle size='35px' />
      <Box ml='4' flex='1'>
        <SkeletonText noOfLines={2} w='20%' />
        <SkeletonText noOfLines={3} mt='4' />
      </Box>
    </Flex>
  );
}

export default CommentSkeleton;
