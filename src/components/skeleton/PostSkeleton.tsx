import { Flex, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react';

function PostSkeleton() {
  return (
    <Box maxW='600px' mx='auto' py='4' px='4'>
      <Flex alignItems='center'>
        <SkeletonCircle size='40px' />
        <SkeletonText noOfLines={2} ml='4' w='20%' />
      </Flex>
      <SkeletonText noOfLines={4} mt='4' />
      <Flex p='4'>
        <SkeletonCircle size='20px' />
        <SkeletonCircle size='20px' ml='4' />
      </Flex>
    </Box>
  );
}

export default PostSkeleton;
