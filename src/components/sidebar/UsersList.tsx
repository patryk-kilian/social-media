import { Box, Heading } from '@chakra-ui/react';
import User from './User';
import { useNewUsers } from '../../hooks/useUsers';
import { UserTypes } from '../../types/types';
import NewUsersSkeleton from '../skeleton/NewUsersSkeleton';

function UsersList({ activeUser }: { activeUser: UserTypes }) {
  const { data: newUsers, isLoading } = useNewUsers();

  if (isLoading) return <NewUsersSkeleton />;

  return (
    <Box>
      <Heading as='h3' textAlign='center' size='md'>
        New users:
      </Heading>
      <Box as='ul'>
        {newUsers?.map((user) => (
          <User key={user.userId} user={user} activeUser={activeUser} />
        ))}
      </Box>
    </Box>
  );
}

export default UsersList;
