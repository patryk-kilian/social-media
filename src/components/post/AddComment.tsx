import {
  Box,
  Flex,
  Image,
  Textarea,
  Button,
  SkeletonCircle,
} from '@chakra-ui/react';
import { UserTypes } from '../../types';
import { Link as RouterLink } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import useAddComment from '../../hooks/useAddComment';

type FormData = {
  commentText: string;
};

type AddCommentProps = {
  user: UserTypes;
  postDocId: string;
};

function AddComment({ user, postDocId }: AddCommentProps) {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { mutate: addComment, isLoading: isAdding } = useAddComment();

  const handleAddComment = (data: FormData) => {
    const commentData = {
      userId: user.userId,
      commentText: data.commentText,
      username: user.username,
      userAvatar: user.pictureUrl || '',
      dateCreated: Date.now(),
      commentId: uuidv4(),
      postDocId,
    };

    addComment(commentData);
    reset();
  };

  return (
    <Box maxW='600px' mx='auto' py='6'>
      <Flex padding='4'>
        <RouterLink to={`/profile/${user?.userId}`}>
          <Image
            src={user?.pictureUrl || '/images/user-placeholder.jpg'}
            fallback={<SkeletonCircle size='30px' mr='4' />}
            alt='user'
            boxSize='30px'
            borderRadius='full'
            objectFit='cover'
            mr='4'
          />
        </RouterLink>
        <Box flex='1'>
          <form onSubmit={handleSubmit(handleAddComment)}>
            <Box>
              <Textarea
                name='commentText'
                size='sm'
                variant='flushed'
                minH='unset'
                overflow='hidden'
                w='100%'
                resize='none'
                minRows={1}
                as={TextareaAutosize}
                placeholder='Write comment...'
                ref={register({ required: true })}
              />
            </Box>
            <Flex pt='2'>
              <Button
                isLoading={isAdding ? true : false}
                type='submit'
                colorScheme='purple'
                size='xs'
                ml='auto'
              >
                Add Comment
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default AddComment;
