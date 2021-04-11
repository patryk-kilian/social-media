import { useQuery } from 'react-query';
import { db } from '../lib/firebase';
import { useAuth } from '../context/auth-context';

function useNewUsers() {
  const { authUser } = useAuth();

  return useQuery('new-users', async () => {
    const result = await db
      .collection('users')
      .orderBy('dateCreated', 'desc')
      .limit(6)
      .get();
    return result.docs
      .map((user: any) => ({
        ...user.data(),
        docId: user.id,
      }))
      .filter((user) => authUser.uid !== user.userId);
  });
}

export default useNewUsers;
