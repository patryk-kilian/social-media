import {
  Flex,
  SkeletonCircle,
  SkeletonText,
  Skeleton,
  Box,
} from '@chakra-ui/react';

function UserProfileSkeleton() {
  return (
    <Flex maxW='600px' mx='auto' py='12'>
      <SkeletonCircle size='80px' />
      <Box flex='1'>
        <SkeletonText noOfLines={5} ml='4' />
        <Skeleton height='6' mt='6' maxW='100px' ml='auto' />
      </Box>
    </Flex>
  );
}

export default UserProfileSkeleton;
