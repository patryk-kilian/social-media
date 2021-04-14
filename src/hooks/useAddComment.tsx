import { useMutation } from 'react-query';
import { db, FieldValue } from '../lib/firebase';
import { queryClient } from '../App';

type CommentTypes = {
  commentText: string;
  postId: string;
  userId: string;
};

function useAddComment() {
  return useMutation(
    async (commentData: CommentTypes) => {
      await db.collection('comments').add(commentData);

      await db
        .collection('posts')
        .doc(commentData.postId)
        .update({
          comments: FieldValue.arrayUnion(commentData.userId),
        });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('comments');
      },
    }
  );
}

export default useAddComment;
