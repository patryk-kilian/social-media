import { Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

function ActiveUserSkeleton() {
  return (
    <Flex py='2' alignItems='center' direction='column'>
      <SkeletonCircle size='100px' />
      <SkeletonText noOfLines={1} width='50%' mt='4' />
    </Flex>
  );
}

export default ActiveUserSkeleton;
