import { useMutation } from 'react-query';
import { db, FieldValue } from '../lib/firebase';
import { queryClient } from '../App';
import { postTypes } from '../types/index';

function useAddPost() {
  return useMutation(
    async (postData: postTypes) => {
      await db.collection('posts').add(postData);

      await db
        .collection('users')
        .doc(postData.userDocId)
        .update({
          posts: FieldValue.arrayUnion(postData.postId),
        });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );
}

export default useAddPost;
