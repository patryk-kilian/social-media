import { Box } from '@chakra-ui/react';
import AuthUser from './AuthUser';
import UsersList from './UsersList';

function Sidebar() {
  return (
    <Box
      pt='16'
      px='6'
      minH='100vh'
      h='100%'
      w='300px'
      bg='white'
      borderLeft='1px solid'
      borderLeftColor='purple.100'
    >
      <AuthUser />
      <UsersList />
    </Box>
  );
}

export default Sidebar;
