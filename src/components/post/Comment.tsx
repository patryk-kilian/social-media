import { useState, useRef } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  SkeletonCircle,
  IconButton,
} from '@chakra-ui/react';
import { FaTrashAlt } from 'react-icons/fa';
import { formatDistance } from 'date-fns';
import { useActiveUser } from '../../context/active-user';
import { Link as RouterLink } from 'react-router-dom';
import CommentDeleteAlert from './CommentDeleteAlert';
import { commentTypes } from '../../types';

function Comment({ comment }: { comment: commentTypes }) {
  const [isDeleteAlertOpen, setDeleteAlertOpen] = useState(false);

  const {
    commentText,
    userAvatar,
    username,
    dateCreated,
    userId,
    docId,
  } = comment;
  const { activeUser } = useActiveUser();
  const cancelRef = useRef();

  const onDeleteAlertClose = () => setDeleteAlertOpen(false);

  const isActiveUserAuthot = activeUser?.userId === userId;

  return (
    <Box px='4' py='2'>
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
            {isActiveUserAuthot && (
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
            <Text>{commentText}</Text>
          </Box>
        </Box>
      </Flex>
      <CommentDeleteAlert
        docId={docId}
        isOpen={isDeleteAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={onDeleteAlertClose}
      />
    </Box>
  );
}

export default Comment;
