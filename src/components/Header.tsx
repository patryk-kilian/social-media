import { useAuth } from '../context/auth-context';
import { Box, Flex, Button, Link } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { SIGN_IN } from '../constants/routes';
import { DASHBOARD } from '../constants/routes';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  const { logout } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push(SIGN_IN);
  };

  return (
    <Box
      as='header'
      shadow='sm'
      pos='fixed'
      width='full'
      left='0'
      right='0'
      borderTop='6px solid'
      borderTopColor='purple.400'
      height='16'
      zIndex='3'
      bg='white'
    >
      <Flex
        px='4'
        height='100%'
        align='center'
        justify='space-between'
        mx='auto'
        maxW='1200px'
      >
        <Link as={RouterLink} to={DASHBOARD}>
          Home
        </Link>
        <Button colorScheme='purple' size='sm' onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
