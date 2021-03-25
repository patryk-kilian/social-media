import { Box, Image, Text } from '@chakra-ui/react';
import { useAuth } from '../../context/auth-context';

function AuthUser() {
  const { authUser } = useAuth();

  return (
    <Box py='5'>
      <Image
        src='/images/user-placeholder.jpg'
        alt='user'
        boxSize='100px'
        mx='auto'
        borderRadius='full'
      />
      <Text align='center' mt='2'>
        {authUser?.displayName}
      </Text>
    </Box>
  );
}

export default AuthUser;
