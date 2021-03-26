import { useQuery } from 'react-query';
import { firebase } from '../lib/firebase';

export const useUser = (userId: string) => {
  return useQuery(['user', userId], async () => {
    const result = await firebase
      .firestore()
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
  });
};
