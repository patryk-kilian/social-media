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
import useDeleteComment from '../../hooks/useDeleteComment';

function CommentDeleteAlert(props: any) {
  const { docId, postDocId, commentId, ...otherProps } = props;
  const { mutate: deleteComment, isLoading, isSuccess } = useDeleteComment();

  useEffect(() => {
    console.log('comment effect');
    if (isSuccess) {
      props.onClose();
    }
  }, [isSuccess, props]);

  return (
    <AlertDialog {...otherProps}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete Comment
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure you want do delete this comment?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={props.cancelRef} onClick={props.onClose}>
              Cancel
            </Button>
            <Button
              isLoading={isLoading ? true : false}
              colorScheme='red'
              onClick={() => deleteComment({ docId, postDocId, commentId })}
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

export default CommentDeleteAlert;
