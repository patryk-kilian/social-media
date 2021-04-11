import { Box, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ActiveUserSkeleton from '../skeleton/ActiveUserSkeleton';
import { userTypes } from '../../types';

type ActiveUserTypes = {
  user: userTypes;
  isLoading: boolean;
};

function ActiveUser({ user, isLoading }: ActiveUserTypes) {
  if (isLoading) return <ActiveUserSkeleton />;

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
