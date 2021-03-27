import { Flex, Image, Text, Link } from '@chakra-ui/react';
import NewUserSkeleton from '../skeleton/NewUserSkeleton';
import { UserTypes } from '../../types/types';
import FollowButton from '../../components/shared/FollowButton';
import { Link as RouterLink } from 'react-router-dom';

type UserProps = {
  user: UserTypes;
  activeUser: UserTypes | any;
  isUserLoading: boolean;
};

function User({ user, activeUser, isUserLoading }: UserProps) {
  if (isUserLoading) return <NewUserSkeleton />;

  return (
    <Flex py='2' as='li' alignItems='center'>
      <Image
        src='/images/user-placeholder.jpg'
        alt='user'
        boxSize='40px'
        mr='3'
        borderRadius='full'
      />
      <Link as={RouterLink} to={`/profile/${user.userId}`}>
        {user.username}
      </Link>
      <FollowButton ml='auto' size='sm' activeUser={activeUser} user={user} />
    </Flex>
  );
}

export default User;
