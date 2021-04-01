import { Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

function NewUsersSkeleton() {
  return (
    <>
      {[...Array(6)].map((el, i) => {
        return (
          <Flex py='2' alignItems='center' key={i}>
            <SkeletonCircle size='40px' />
            <SkeletonText noOfLines={1} width='70%' ml='4' />
          </Flex>
        );
      })}
    </>
  );
}

export default NewUsersSkeleton;
