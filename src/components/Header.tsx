import { useAuth } from '../context/auth-context';
import { Box, Flex, Button } from '@chakra-ui/react';

function Header() {
  const { logout } = useAuth();

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
        <p>Home</p>
        <Button colorScheme='purple' size='sm' onClick={() => logout()}>
          Logout
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;
