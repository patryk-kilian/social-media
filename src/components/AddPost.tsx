import {
  Box,
  Flex,
  Image,
  Button,
  SkeletonCircle,
  Textarea,
} from '@chakra-ui/react';
import { useActiveUser } from '../context/active-user';
import { Link as RouterLink } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { useForm } from 'react-hook-form';
import useAddPost from '../hooks/useAddPost';

type FormData = {
  postText: string;
};

function AddPost() {
  const { activeUser, isLoading } = useActiveUser();
  const { register, handleSubmit, errors, reset } = useForm<FormData>();
  const { mutate: addPost, isLoading: isAdding } = useAddPost();

  const handleAddPost = (data: FormData) => {
    const postData = {
      userId: activeUser.userId,
      postText: data.postText,
      likes: [],
      comments: [],
      dateCreated: Date.now(),
    };

    addPost(postData);

    reset();
  };

  if (isLoading) return <div>loading</div>;

  return (
    <Box maxW='600px' mx='auto' py='12'>
      <Flex padding='4'>
        <RouterLink to={`/profile/${activeUser?.userId}`}>
          <Image
            src={activeUser?.pictureUrl || '/images/user-placeholder.jpg'}
            fallback={<SkeletonCircle size='80px' />}
            alt='user'
            boxSize='80px'
            borderRadius='full'
            objectFit='cover'
            mr='4'
          />
        </RouterLink>
        <Box flex='1'>
          <form onSubmit={handleSubmit(handleAddPost)}>
            <Box>
              <Textarea
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
            <Flex pt='2'>
              <Button
                isLoading={isAdding ? true : false}
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