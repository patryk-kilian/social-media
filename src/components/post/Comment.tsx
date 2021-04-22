import { useState, useRef } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  SkeletonCircle,
  IconButton,
} from '@chakra-ui/react';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import { CommentTypes } from '../../types';
import { useActiveUser } from '../../context/active-user';
import { FaTrashAlt } from 'react-icons/fa';
import CommentDeleteAlert from './CommentDeleteAlert';

function Comment({ comment }: { comment: CommentTypes }) {
  const [isDeleteAlertOpen, setDeleteAlertOpen] = useState(false);

  const {
    commentText,
    userAvatar,
    username,
    dateCreated,
    userId,
    docId,
    postDocId,
    commentId,
  } = comment;

  const { activeUser } = useActiveUser();
  const cancelRef = useRef();

  const onDeleteAlertClose = () => setDeleteAlertOpen(false);

  const isActiveUserAuthor = activeUser?.userId === userId;

  return (
    <Box px='4' py='2' maxW='600px' mx='auto'>
      <Flex pb='2'>
        <Image
          src={userAvatar || '/images/user-placeholder.jpg'}
          fallback={<SkeletonCircle size='35px' mr='4' />}
          alt='user'
          boxSize='35px'
          borderRadius='full'
          objectFit='cover'
          mr='4'
        />
        <Box flex='1'>
          <Flex borderBottom='1px solid' borderColor='purple.100' pb='2'>
            <Box>
              <Text
                fontSize='sm'
                as={RouterLink}
                to={`/profile/${userId}`}
                fontWeight='bold'
              >
                {username}
              </Text>
              <Text fontSize='xs' color='gray.500'>
                {formatDistance(dateCreated, Date.now(), { addSuffix: true })}
              </Text>
            </Box>
            {isActiveUserAuthor && (
              <IconButton
                ml='auto'
                isRound
                aria-label='delete comment'
                variant='ghost'
                icon={<FaTrashAlt />}
                colorScheme='red'
                size='sm'
                onClick={() => setDeleteAlertOpen(true)}
              />
            )}
          </Flex>
          <Box pt='2' fontSize='sm'>
            <Text wordBreak='break-word'>{commentText}</Text>
          </Box>
        </Box>
      </Flex>
      {isDeleteAlertOpen && (
        <CommentDeleteAlert
          commentId={commentId}
          postDocId={postDocId}
          docId={docId}
          isOpen={isDeleteAlertOpen}
          leastDestructiveRef={cancelRef}
          onClose={onDeleteAlertClose}
        />
      )}
    </Box>
  );
}

export default Comment;
