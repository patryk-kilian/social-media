import { Box, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function ActiveUser({ user }: { user: any }) {
  const { username, pictureUrl } = user;

  return (
    <Box py='5' textAlign='center'>
      <Image
        src={pictureUrl}
        fallbackSrc='/images/user-placeholder.jpg'
        alt='user'
        boxSize='100px'
        mx='auto'
        borderRadius='full'
        objectFit='cover'
      />
      <Link
        as={RouterLink}
        to={`/profile/${user.userId}`}
        mt='2'
        display='inline-block'
      >
        {username}
      </Link>
    </Box>
  );
}

export default ActiveUser;
