import { useRef } from 'react';
import { Flex, Image, Text, Button } from '@chakra-ui/react';
import { useToggleFollow } from '../../hooks/useToggleFollow';
import useHover from '../../hooks/useHover';
import NewUserSkeleton from '../skeleton/NewUserSkeleton';
import { UserTypes } from '../../types/types';

type UserProps = {
  user: UserTypes;
  activeUser: UserTypes | any;
  isUserLoading: boolean;
};

function User({ user, activeUser, isUserLoading }: UserProps) {
  const {
    mutate: toggleFollow,
    isLoading: isTogglingFollow,
  } = useToggleFollow();

  const hoverRef = useRef(null);
  const isHovered = useHover(hoverRef);

  const isFollowingProfile = activeUser?.following.find(
    (userId: string) => userId === user.userId
  );

  const handleToggleFollow = () => {
    const toggleFollowData = {
      activeUserDocId: activeUser.docId,
      activeUserId: activeUser.userId,
      profileUserId: user.userId,
      profileDocId: user.docId,
      isFollowingProfile,
    };

    toggleFollow(toggleFollowData);
  };

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
      <Text>{user.username}</Text>
      <Button
        isLoading={isTogglingFollow}
        ref={hoverRef}
        size='sm'
        ml='auto'
        variant={isFollowingProfile ? 'solid' : 'outline'}
        colorScheme={
          isFollowingProfile ? (isHovered ? 'red' : 'purple') : 'purple'
        }
        onClick={handleToggleFollow}
      >
        {isFollowingProfile ? (isHovered ? 'Unfollow' : 'Following') : 'Follow'}
      </Button>
    </Flex>
  );
}

export default User;
