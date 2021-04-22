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
import { useLocation, useHistory } from 'react-router-dom';
import useDeletePost from '../../hooks/useDeletePost';

type PostDeleteAlertProps = {
  postDocId: string | undefined;
  userDocId: string;
  postId: string;
  isOpen: boolean;
  onClose: () => void;
  leastDestructiveRef: React.RefObject<any>;
};

function PostDeleteAlert(props: PostDeleteAlertProps) {
  const location = useLocation();
  const history = useHistory();
  const { mutate: deletePost, isLoading, isSuccess } = useDeletePost();

  const { onClose, leastDestructiveRef, isOpen } = props;

  const deletePostData = {
    docId: props.postDocId,
    userDocId: props.userDocId,
    postId: props.postId,
  };

  useEffect(() => {
    if (isSuccess) {
      props.onClose();

      if (location.pathname.includes('post')) {
        history.push('/');
      }
    }
  }, [props, location.pathname, isSuccess, history]);

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={leastDestructiveRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete Post
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure you want do delete this post?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={leastDestructiveRef} onClick={props.onClose}>
              Cancel
            </Button>
            <Button
              isLoading={isLoading ? true : false}
              colorScheme='red'
              onClick={() => deletePost(deletePostData)}
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
