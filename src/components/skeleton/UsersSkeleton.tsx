import { SimpleGrid, Skeleton } from '@chakra-ui/react';

function UsersSkeleton() {
  return (
    <SimpleGrid
      listStyleType='none'
      as='ul'
      columns={[2, 3, 4]}
      spacing={[2, 3]}
      px='10px'
      py='6'
    >
      {[...Array(8)].map((el, i) => {
        return <Skeleton h='150px' key={i} />;
      })}
    </SimpleGrid>
  );
}

export default UsersSkeleton;
