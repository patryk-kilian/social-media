import { useQuery } from 'react-query';
import { db } from '../lib/firebase';

function useUser(userId: string) {
  return useQuery(['user', userId], async () => {
    if (userId) {
      const result = await db
        .collection('users')
        .where('userId', '==', userId)
        .get();

      const user = result.docs.reduce(
        (acc, item) => ({
          ...item.data(),
          docId: item.id,
        }),
        {}
      );
      return user;
    }

    return null;
  });
}

export default useUser;
