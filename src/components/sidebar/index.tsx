import { Box } from '@chakra-ui/react';
import ActiveUser from './ActiveUser';
import UsersList from './UsersList';
import { useActiveUser } from '../../context/active-user';

function Sidebar() {
  const { activeUser, isLoading } = useActiveUser();

  return (
    <Box
      px='6'
      minH='100vh'
      h='100%'
      w='300px'
      bg='white'
      borderLeft='1px solid'
      borderLeftColor='purple.100'
    >
      <ActiveUser isLoading={isLoading} user={activeUser} />
      <UsersList activeUser={activeUser} />
    </Box>
  );
}

export default Sidebar;
