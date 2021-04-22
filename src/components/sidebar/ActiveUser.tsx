import { Box, Image, Link, SkeletonCircle } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ActiveUserSkeleton from '../skeleton/ActiveUserSkeleton';
import { UserTypes } from '../../types';

type ActiveUserProps = {
  user: UserTypes;
  isLoading: boolean;
};

function ActiveUser({ user, isLoading }: ActiveUserProps) {
  if (isLoading) return <ActiveUserSkeleton />;

  const { username, pictureUrl } = user;

  return (
    <Box py='5' textAlign='center'>
      <Image
        src={pictureUrl || '/images/user-placeholder.jpg'}
        fallback={<SkeletonCircle size='100px' mx='auto' />}
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
