import { useMutation } from 'react-query';
import { db } from '../lib/firebase';
import { queryClient } from '../App';
import { postTypes } from '../types/index';

function useAddPost() {
  return useMutation(
    async (postData: postTypes) => {
      await db.collection('posts').add(postData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );
}

export default useAddPost;
