import { useQuery } from 'react-query';
import { firebase } from '../lib/firebase';
import { useAuth } from '../context/auth-context';

export const useNewUsers = () => {
  const { authUser } = useAuth();

  return useQuery('new-users', async () => {
    const result = await firebase
      .firestore()
      .collection('users')
      .limit(6)
      .get();
    return result.docs
      .map((user: any) => ({
        ...user.data(),
        docId: user.id,
      }))
      .filter((user) => authUser.uid !== user.userId)
      .sort((user1: any, user2: any) => user2.dateCreated - user1.dateCreated);
  });
};
