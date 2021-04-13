import { useMutation } from 'react-query';
import { db } from '../lib/firebase';
import { queryClient } from '../App';

function useDeletePost() {
  return useMutation(
    async (postId: string) => {
      await db.collection('posts').doc(postId).delete();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );
}

export default useDeletePost;
