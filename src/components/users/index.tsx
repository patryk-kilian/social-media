import useAllUsers from '../../hooks/useAllUsers';
import User from './User';
import { SimpleGrid } from '@chakra-ui/react';
import UsersSkeleton from '../skeleton/UsersSkeleton';

function AllUsers() {
  const { data: users, isLoading } = useAllUsers();

  if (isLoading) return <UsersSkeleton />;

  return (
    <SimpleGrid
      listStyleType='none'
      as='ul'
      columns={[2, 3, 4]}
      spacing={[2, 3]}
      px='10px'
      py='6'
    >
      {users?.map((user) => (
        <User isLoading={isLoading} key={user.userId} user={user} />
      ))}
    </SimpleGrid>
  );
}

export default AllUsers;
