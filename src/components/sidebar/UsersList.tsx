import { Box, Heading, Button } from '@chakra-ui/react';
import { UserTypes } from '../../types';
import { Link as RouterLink } from 'react-router-dom';
import { USERS } from '../../constants/routes';
import useNewUsers from '../../hooks/useNewUsers';
import NewUsersSkeleton from '../skeleton/NewUsersSkeleton';
import User from './User';

type UsersListProps = {
  activeUser: UserTypes;
  isActiveUserLoading: boolean;
};

function UsersList({ activeUser, isActiveUserLoading }: UsersListProps) {
  const { data: newUsers, isLoading } = useNewUsers();

  if (isLoading || isActiveUserLoading) return <NewUsersSkeleton />;

  return (
    <Box textAlign='center'>
      <Heading as='h3' textAlign='center' size='md'>
        New users:
      </Heading>
      <Box as='ul' borderBottom='2px solid' borderColor='purple.200'>
        {newUsers?.map((user) => (
          <User key={user.userId} user={user} activeUser={activeUser} />
        ))}
      </Box>
      <Button
        variant='outline'
        colorScheme='purple'
        as={RouterLink}
        to={USERS}
        mt='4'
        size='sm'
      >
        ALL USERS
      </Button>
    </Box>
  );
}

export default UsersList;
