import { useState, useRef } from 'react';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useActiveUser } from '../../context/active-user';
import useToggleLike from '../../hooks/useToggleLike';
import { FaHeart, FaRegHeart, FaComment, FaTrashAlt } from 'react-icons/fa';
import PostDeleteAlert from './PostDeleteAlert';

type PostActionsProps = {
  likes: [];
  postDocId: string | undefined;
  postId: string;
  authorId: string;
  comments: [];
};

function Actions({
  likes,
  postDocId,
  postId,
  authorId,
  comments,
}: PostActionsProps) {
  const [isDeleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const { activeUser } = useActiveUser();
  const { mutate: toggleLike, isLoading } = useToggleLike();

  const cancelRef = useRef();

  const isLiked = likes?.find((userId) => userId === activeUser?.userId);

  const handlePostLike = () => {
    const toggleLikeData = {
      userId: activeUser.userId,
      isLiked,
      postDocId,
    };

    toggleLike(toggleLikeData);
  };

  const onDeleteAlertClose = () => setDeleteAlertOpen(false);

  const isActiveUserAuthor = activeUser?.userId === authorId;

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
      <RouterLink to={`/post/${postDocId}`}>
        <Flex alignItems='center' ml='2'>
          <IconButton
            isRound
            aria-label='comment post'
            variant='ghost'
            icon={<FaComment />}
            colorScheme='purple'
            size='md'
          />
          <Text>{comments.length}</Text>
        </Flex>
      </RouterLink>
      {isActiveUserAuthor && (
        <IconButton
          ml='auto'
          isRound
          aria-label='delete post'
          variant='ghost'
          icon={<FaTrashAlt />}
          colorScheme='red'
          size='md'
          onClick={() => setDeleteAlertOpen(true)}
        />
      )}
      {isDeleteAlertOpen && (
        <PostDeleteAlert
          userDocId={activeUser?.docId}
          postId={postId}
          postDocId={postDocId}
          isOpen={isDeleteAlertOpen}
          leastDestructiveRef={cancelRef}
          onClose={onDeleteAlertClose}
        />
      )}
    </Flex>
  );
}

export default Actions;
