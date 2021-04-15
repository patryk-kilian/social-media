import { useQuery } from 'react-query';
import { db } from '../lib/firebase';

function useComments(postId: string) {
  return useQuery(['comments', postId], async () => {
    const result = await db
      .collection('comments')
      .where('postDocId', '==', postId)
      .get();

    const comments = result.docs
      .map((comment: any) => ({
        ...comment.data(),
        docId: comment.id,
      }))
      .sort(
        (comment1, comment2) => comment2.dateCreated - comment1.dateCreated
      );

    return comments;
  });
}

export default useComments;
