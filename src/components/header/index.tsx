import { useState } from 'react';
import { Box, Flex, Button, Link } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { DASHBOARD, SIGN_IN } from '../../constants/routes';
import { useAuth } from '../../context/auth-context';
import MenuToggle from './MenuToggle';
import MobileMenu from './MobileMenu';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { logout } = useAuth();
  const history = useHistory();

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

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
      <Flex px='4' height='100%' align='center' mx='auto' maxW='1200px'>
        <Link as={RouterLink} to={DASHBOARD}>
          Home
        </Link>
        <Button ml='auto' colorScheme='purple' size='sm' onClick={handleLogout}>
          Logout
        </Button>
        <MenuToggle toggle={toggleMobileMenu} isOpen={isMobileMenuOpen} />
      </Flex>
      <MobileMenu isOpen={isMobileMenuOpen} />
    </Box>
  );
}

export default Header;
