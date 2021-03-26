import { Box, Image, Text } from '@chakra-ui/react';

function AuthUser({ user }: { user: any }) {
  const { username } = user;

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
        {username}
      </Text>
    </Box>
  );
}

export default AuthUser;
