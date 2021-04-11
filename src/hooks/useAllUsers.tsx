import { useQuery } from 'react-query';
import { db } from '../lib/firebase';
import { useAuth } from '../context/auth-context';

function useAllUsers() {
  const { authUser } = useAuth();

  return useQuery('users', async () => {
    const result = await db
      .collection('users')
      .orderBy('dateCreated', 'desc')
      .get();
    return result.docs
      .map((user: any) => ({
        ...user.data(),
        docId: user.id,
      }))
      .filter((user) => authUser.uid !== user.userId);
  });
}

export default useAllUsers;
