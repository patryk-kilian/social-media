import { useMutation } from 'react-query';
import { db } from '../lib/firebase';
// import { queryClient } from '../App';

function useAddPost() {
  return useMutation(async (postData: {}) => {
    await db.collection('posts').add(postData);
  });
}

export default useAddPost;
