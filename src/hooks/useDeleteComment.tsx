import { useMutation } from 'react-query';
import { db } from '../lib/firebase';
import { queryClient } from '../App';

function useDeleteComment() {
  return useMutation(
    async (docId: string) => {
      await db.collection('comments').doc(docId).delete();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('comments');
      },
    }
  );
}

export default useDeleteComment;
