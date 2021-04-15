import { Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

function UserProfileSkeleton() {
  return (
    <Flex py='6' alignItems='center'>
      <SkeletonCircle size='150px' />
      <SkeletonText noOfLines={5} width='70%' ml='4' />
    </Flex>
  );
}

export default UserProfileSkeleton;
