import { useMutation } from 'react-query';
import { db } from '../lib/firebase';
import { queryClient } from '../App';
import { useActiveUser } from '../context/active-user';

function useUpdateUser() {
  const { activeUser } = useActiveUser();

  return useMutation(
    async (userNewData: { fullname?: string; pictureUrl?: string }) => {
      await db.collection('users').doc(activeUser.docId).update(userNewData);

      if (userNewData.pictureUrl) {
        const postsToUpdate = await db
          .collection('posts')
          .where('userId', '==', activeUser.userId)
          .get();

        const commentsToUpdate = await db
          .collection('comments')
          .where('userId', '==', activeUser.userId)
          .get();

        postsToUpdate.docs.forEach((post) => {
          post.ref.update({
            userAvatar: userNewData.pictureUrl,
          });
        });

        commentsToUpdate.docs.forEach((comment) => {
          comment.ref.update({
            userAvatar: userNewData.pictureUrl,
          });
        });
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
        queryClient.invalidateQueries('posts');
      },
    }
  );
}

export default useUpdateUser;
