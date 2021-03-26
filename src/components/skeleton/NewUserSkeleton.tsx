import { Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

function NewUserSkeleton() {
  return (
    <Flex py='2' alignItems='center'>
      <SkeletonCircle size='40px' />
      <SkeletonText noOfLines={1} width='70%' ml='4' />
    </Flex>
  );
}

export default NewUserSkeleton;
