import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaHeart, FaRegHeart, FaComment, FaTrashAlt } from 'react-icons/fa';
import { useActiveUser } from '../../context/active-user';
import useToggleLike from '../../hooks/useToggleLike';

function Actions({ likes, postId }: { likes: []; postId: string }) {
  const { activeUser } = useActiveUser();
  const { mutate: toggleLike, isLoading } = useToggleLike();

  const isLiked = likes.find((userId) => userId === activeUser.userId);

  const handlePostLike = () => {
    const toggleLikeData = {
      userId: activeUser.userId,
      isLiked,
      postId,
    };

    toggleLike(toggleLikeData);
  };

  return (
    <Flex p='2'>
      <Flex alignItems='center'>
        <IconButton
          isLoading={isLoading}
          onClick={handlePostLike}
          isRound
          aria-label='like post'
          variant='ghost'
          icon={isLiked ? <FaHeart /> : <FaRegHeart />}
          colorScheme='red'
          size='md'
        />
        <Text>{likes.length}</Text>
      </Flex>
      <Flex alignItems='center' ml='2'>
        <IconButton
          isRound
          aria-label='like post'
          variant='ghost'
          icon={<FaComment />}
          colorScheme='purple'
          size='md'
        />
        <Text>1</Text>
      </Flex>
      <IconButton
        ml='auto'
        isRound
        aria-label='like post'
        variant='ghost'
        icon={<FaTrashAlt />}
        colorScheme='red'
        size='md'
      />
    </Flex>
  );
}

export default Actions;
