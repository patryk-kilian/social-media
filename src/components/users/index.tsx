import useAllUsers from '../../hooks/useAllUsers';
import User from './User';
import { SimpleGrid, Skeleton } from '@chakra-ui/react';

function AllUsers() {
  const { data: users, isLoading } = useAllUsers();

  return (
    <SimpleGrid
      listStyleType='none'
      as='ul'
      columns={4}
      spacing={3}
      px='10px'
      py='6'
    >
      {users?.map((user) => (
        <Skeleton isLoaded={!isLoading} key={user.userId}>
          <User isLoading={isLoading} key={user.userId} user={user} />
        </Skeleton>
      ))}
    </SimpleGrid>
  );
}

export default AllUsers;
