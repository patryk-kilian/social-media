import { useQuery } from 'react-query';
import { db } from '../lib/firebase';

function usePost(postid: string) {
  return useQuery(['post', postid], async () => {
    const result = await db.collection('posts').doc(postid).get();

    const post = {
      ...result.data(),
      postId: result.id,
    };

    return post;
  });
}

export default usePost;
