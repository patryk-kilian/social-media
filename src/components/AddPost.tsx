import { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Button,
  SkeletonCircle,
  Textarea,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from 'react-hook-form';
import { UserTypes, PostTypes } from '../types';
import { v4 as uuidv4 } from 'uuid';
import useAddPost from '../hooks/useAddPost';

type FormData = {
  postText: string;
};

function AddPost({ user }: { user: UserTypes }) {
  const [textInputLength, setTextInputLength] = useState(0);
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { mutate: addPost, isLoading: isAdding } = useAddPost();
  const maxTextInputLength = 280;

  const handleAddPost = (data: FormData) => {
    const postData: PostTypes = {
      postId: uuidv4(),
      userId: user.userId,
      userDocId: user.docId,
      postText: data.postText,
      likes: [],
      comments: [],
      dateCreated: Date.now(),
      userAvatar: user.pictureUrl || '',
      username: user.username,
    };

    addPost(postData);

    reset();
    setTextInputLength(0);
  };

  const onTextInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTextInputLength(e.target.value.length);

  const isMaximumLengthReached = textInputLength >= maxTextInputLength;

  return (
    <Box maxW='600px' mx='auto' py={['6', '10']}>
      <Flex padding='4'>
        <RouterLink to={`/profile/${user?.userId}`}>
          <Image
            src={user?.pictureUrl || '/images/user-placeholder.jpg'}
            fallback={<SkeletonCircle boxSize={['50px', '80px']} mr='4' />}
            alt='user'
            boxSize={['50px', '80px']}
            borderRadius='full'
            objectFit='cover'
            mr='4'
          />
        </RouterLink>
        <Box flex='1'>
          <form onSubmit={handleSubmit(handleAddPost)}>
            <Box>
              <Textarea
                onChange={onTextInputChange}
                name='postText'
                size='lg'
                variant='flushed'
                minH='unset'
                overflow='hidden'
                w='100%'
                resize='none'
                minRows={3}
                as={TextareaAutosize}
                placeholder="What's happening?"
                ref={register({ required: true })}
              />
            </Box>
            <Flex pt='2' alignItems='center'>
              {textInputLength > 0 && (
                <CircularProgress
                  size='40px'
                  color={
                    textInputLength > maxTextInputLength
                      ? 'red.500'
                      : maxTextInputLength - textInputLength <= 20
                      ? 'orange.500'
                      : 'purple.500'
                  }
                  value={textInputLength}
                  max={maxTextInputLength}
                >
                  <CircularProgressLabel>
                    {maxTextInputLength - textInputLength <= 20
                      ? maxTextInputLength - textInputLength
                      : null}
                  </CircularProgressLabel>
                </CircularProgress>
              )}
              <Button
                isLoading={isAdding ? true : false}
                isDisabled={isMaximumLengthReached ? true : false}
                type='submit'
                colorScheme='purple'
                size='md'
                ml='auto'
              >
                Send
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}

export default AddPost;
