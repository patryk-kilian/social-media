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
import { useLocation, useHistory } from 'react-router-dom';

function PostDeleteAlert(props: any) {
  const { postDocId, userDocId, postId, ...otherProps } = props;
  const { mutate: deletePost, isLoading, isSuccess } = useDeletePost();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (isSuccess) {
      props.onClose();

      if (location.pathname.includes('post')) {
        history.push('/');
      }
    }
  }, [props]);

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
              isLoading={isLoading ? true : false}
              colorScheme='red'
              onClick={() =>
                deletePost({ docId: postDocId, userDocId, postId })
              }
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
