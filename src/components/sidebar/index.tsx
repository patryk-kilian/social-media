import { Box } from '@chakra-ui/react';
import AuthUser from './AuthUser';
import UsersList from './UsersList';
import { useUser } from '../../hooks/useUser';
import { useAuth } from '../../context/auth-context';

function Sidebar() {
  const { authUser } = useAuth();
  const { data: activeUser, isLoading } = useUser(authUser.uid);

  if (isLoading) return <Box>Loading</Box>;

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
      <AuthUser user={activeUser} />
      <UsersList user={activeUser} />
    </Box>
  );
}

export default Sidebar;
