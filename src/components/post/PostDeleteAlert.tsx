import { useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import useDeletePost from '../../hooks/useDeletePost';

function PostDeleteAlert(props: any) {
  const { postId, ...otherProps } = props;
  const { mutate: deletePost, isLoading, isSuccess } = useDeletePost();

  useEffect(() => {
    if (isSuccess) {
      props.onClose();
    }
  }, [isSuccess, props]);

  return (
    <AlertDialog {...otherProps}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete Post
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure you want do delete this post?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={props.cancelRef} onClick={props.onClose}>
              Cancel
            </Button>
            <Button
              isLoading={isLoading}
              colorScheme='red'
              onClick={() => deletePost(postId)}
              ml={3}
            >
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default PostDeleteAlert;
