import { useQuery } from 'react-query';
import { db } from '../lib/firebase';

function usePosts(userId: string, following: any) {
  return useQuery('posts', async () => {
    let followingPostsResult: any = [];
    let followingPosts: any = [];

    if (following && following.length > 0) {
      followingPostsResult = await db
        .collection('posts')
        .where('userId', 'in', following)
        .get();

      followingPosts = followingPostsResult.docs.map((post: any) => ({
        ...post.data(),
        docId: post.id,
      }));
    }

    const myPostsResult = await db
      .collection('posts')
      .where('userId', '==', userId)
      .get();

    const myPosts = myPostsResult.docs.map((post: any) => ({
      ...post.data(),
      docId: post.id,
    }));

    const posts = [...followingPosts, ...myPosts].sort(
      (post1, post2) => post2.dateCreated - post1.dateCreated
    );

    return posts;
  });
}

export default usePosts;
