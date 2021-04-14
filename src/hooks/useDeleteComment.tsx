import { useMutation } from 'react-query';
import { db } from '../lib/firebase';
import { queryClient } from '../App';

function useDeleteComment() {
  return useMutation(
    async (commentId: string) => {
      await db.collection('comments').doc(commentId).delete();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('comments');
      },
    }
  );
}

export default useDeleteComment;
