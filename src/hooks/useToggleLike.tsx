import { useMutation } from 'react-query';
import { db, FieldValue } from '../lib/firebase';
import { queryClient } from '../App';

type toggleLikeTypes = {
  isLiked: string | undefined;
  postId: string;
  userId: string;
};

function useToggleLike() {
  return useMutation(
    async (toggleLikeData: toggleLikeTypes) => {
      const { isLiked, postId, userId } = toggleLikeData;

      await db
        .collection('posts')
        .doc(postId)
        .update({
          likes: isLiked
            ? FieldValue.arrayRemove(userId)
            : FieldValue.arrayUnion(userId),
        });
    },

    {
      onSuccess: () => {
        queryClient.refetchQueries('posts');
        queryClient.refetchQueries('post');
      },
    }
  );
}

export default useToggleLike;
