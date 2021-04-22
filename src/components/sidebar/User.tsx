import { Flex, Image, Link } from '@chakra-ui/react';
import { UserTypes } from '../../types';
import FollowButton from '../../components/shared/FollowButton';
import { Link as RouterLink } from 'react-router-dom';

type UserProps = {
  user: UserTypes;
  activeUser: UserTypes | any;
};

function User({ user, activeUser }: UserProps) {
  return (
    <Flex py='2' as='li' alignItems='center'>
      <Image
        src={user.pictureUrl}
        fallbackSrc='/images/user-placeholder.jpg'
        alt='user'
        boxSize='40px'
        mr='3'
        borderRadius='full'
        objectFit='cover'
      />
      <Link as={RouterLink} to={`/profile/${user.userId}`}>
        {user.username}
      </Link>
      <FollowButton ml='auto' size='xs' activeUser={activeUser} user={user} />
    </Flex>
  );
}

export default User;
