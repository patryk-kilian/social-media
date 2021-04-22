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

type CommentDeleteAlertProps = {
  docId: string | undefined;
  postDocId: string;
  commentId: string;
  isOpen: boolean;
  onClose: () => void;
  leastDestructiveRef: React.RefObject<any>;
};

function CommentDeleteAlert(props: CommentDeleteAlertProps) {
  const { mutate: deleteComment, isLoading, isSuccess } = useDeleteComment();

  const { onClose, leastDestructiveRef, isOpen } = props;

  const deleteCommentData = {
    docId: props.docId,
    postDocId: props.postDocId,
    commentId: props.commentId,
  };

  useEffect(() => {
    if (isSuccess) {
      props.onClose();
    }
  }, [isSuccess, props]);

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={leastDestructiveRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Delete Comment
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure you want do delete this comment?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={leastDestructiveRef} onClick={props.onClose}>
              Cancel
            </Button>
            <Button
              isLoading={isLoading ? true : false}
              colorScheme='red'
              onClick={() => deleteComment(deleteCommentData)}
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
