import { useMutation } from 'react-query';
import { db, FieldValue } from '../lib/firebase';
import { queryClient } from '../App';
import { CommentTypes } from '../types';

function useAddComment() {
  return useMutation(
    async (commentData: CommentTypes) => {
      await db.collection('comments').add(commentData);

      await db
        .collection('posts')
        .doc(commentData.postDocId)
        .update({
          comments: FieldValue.arrayUnion(commentData.commentId),
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

export default useAddComment;
