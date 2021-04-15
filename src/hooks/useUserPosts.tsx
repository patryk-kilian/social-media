import { useQuery } from 'react-query';
import { db } from '../lib/firebase';

function useUserPosts(userId: string) {
  return useQuery(['posts', userId], async () => {
    const result = await db
      .collection('posts')
      .where('userId', '==', userId)
      .get();

    const userPosts = result.docs.map((post: any) => ({
      ...post.data(),
      docId: post.id,
    }));

    const posts = userPosts.sort(
      (post1, post2) => post2.dateCreated - post1.dateCreated
    );

    return posts;
  });
}

export default useUserPosts;
