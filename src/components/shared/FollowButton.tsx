import { useRef } from 'react';
import { Button } from '@chakra-ui/react';
import useHover from '../../hooks/useHover';
import { useToggleFollow } from '../../hooks/useToggleFollow';

function FollowButton(props: any) {
  const { activeUser, user, ...otherProps } = props;

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

  return (
    <Button
      {...otherProps}
      isLoading={isTogglingFollow}
      ref={hoverRef}
      variant={isFollowingProfile ? 'solid' : 'outline'}
      colorScheme={
        isFollowingProfile ? (isHovered ? 'red' : 'purple') : 'purple'
      }
      onClick={handleToggleFollow}
    >
      {isFollowingProfile ? (isHovered ? 'Unfollow' : 'Following') : 'Follow'}
    </Button>
  );
}

export default FollowButton;
