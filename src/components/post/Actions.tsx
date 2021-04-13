import { useState, useRef } from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaHeart, FaRegHeart, FaComment, FaTrashAlt } from 'react-icons/fa';
import { useActiveUser } from '../../context/active-user';
import useToggleLike from '../../hooks/useToggleLike';
import PostDeleteAlert from './PostDeleteAlert';

type PostActionsTypes = {
  likes: [];
  postId: string;
  authorId: string;
};

function Actions({ likes, postId, authorId }: PostActionsTypes) {
  const [isDeleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const { activeUser } = useActiveUser();
  const { mutate: toggleLike, isLoading } = useToggleLike();

  const cancelRef = useRef();

  const isLiked = likes.find((userId) => userId === activeUser.userId);

  const handlePostLike = () => {
    const toggleLikeData = {
      userId: activeUser.userId,
      isLiked,
      postId,
    };

    toggleLike(toggleLikeData);
  };

  const onDeleteAlertClose = () => setDeleteAlertOpen(false);

  const isActiveUserAuthor = activeUser.userId === authorId;

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
      {isActiveUserAuthor && (
        <IconButton
          ml='auto'
          isRound
          aria-label='like post'
          variant='ghost'
          icon={<FaTrashAlt />}
          colorScheme='red'
          size='md'
          onClick={() => setDeleteAlertOpen(true)}
        />
      )}
      <PostDeleteAlert
        postId={postId}
        isOpen={isDeleteAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={onDeleteAlertClose}
      />
    </Flex>
  );
}

export default Actions;
