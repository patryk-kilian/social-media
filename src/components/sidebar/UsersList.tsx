import { Box, Heading } from '@chakra-ui/react';
import User from './User';
import { useNewUsers } from '../../hooks/useUsers';
import { UserTypes } from '../../types/types';

function UsersList({ user: activeUser }: { user: UserTypes | any }) {
  const { data: newUsers, isLoading } = useNewUsers();

  return (
    <Box>
      <Heading as='h3' textAlign='center' size='md'>
        New users:
      </Heading>
      <Box as='ul'>
        {newUsers?.map((user) => (
          <User
            key={user.userId}
            user={user}
            activeUser={activeUser}
            isUserLoading={isLoading}
          />
        ))}
      </Box>
    </Box>
  );
}

export default UsersList;
