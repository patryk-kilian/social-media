import { Box, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { UserTypes } from '../../types';

function User({ user }: { isLoading: boolean; user: UserTypes }) {
  return (
    <Box
      as='li'
      bg='gray.100'
      shadow='sm'
      rounded='md'
      h={['120px', '150px']}
      textAlign='center'
      p='4'
    >
      <Image
        src={user.pictureUrl}
        fallbackSrc='/images/user-placeholder.jpg'
        alt='user'
        boxSize={['50px', '80px']}
        mx='auto'
        borderRadius='full'
        objectFit='cover'
        mb='2'
      />
      <Link as={RouterLink} to={`/profile/${user.userId}`}>
        {user.username}
      </Link>
    </Box>
  );
}

export default User;
