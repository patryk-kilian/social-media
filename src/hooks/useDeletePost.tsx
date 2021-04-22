import { useMutation } from 'react-query';
import { db, FieldValue } from '../lib/firebase';
import { queryClient } from '../App';

function useDeletePost() {
  return useMutation(
    async (deletePostData: {
      docId: string | undefined;
      userDocId: string;
      postId: string;
    }) => {
      await db.collection('posts').doc(deletePostData.docId).delete();

      await db
        .collection('users')
        .doc(deletePostData.userDocId)
        .update({
          posts: FieldValue.arrayRemove(deletePostData.postId),
        });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
        queryClient.invalidateQueries('user');
      },
    }
  );
}

export default useDeletePost;
