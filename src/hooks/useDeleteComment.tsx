import { useMutation } from 'react-query';
import { db, FieldValue } from '../lib/firebase';
import { queryClient } from '../App';

function useDeleteComment() {
  return useMutation(
    async (deleteCommentData: {
      docId: string | undefined;
      postDocId: string;
      commentId: string;
    }) => {
      await db.collection('comments').doc(deleteCommentData.docId).delete();

      await db
        .collection('posts')
        .doc(deleteCommentData.postDocId)
        .update({
          comments: FieldValue.arrayRemove(deleteCommentData.commentId),
        });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('comments');
        queryClient.invalidateQueries('post');
      },
    }
  );
}

export default useDeleteComment;
