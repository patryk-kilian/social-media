import { useQuery } from 'react-query';
import { db } from '../lib/firebase';
import { useAuth } from '../context/auth-context';

function useNewUsers() {
  const { authUser } = useAuth();

  return useQuery('new-users', async () => {
    const result = await db.collection('users').limit(6).get();
    return result.docs
      .map((user: any) => ({
        ...user.data(),
        docId: user.id,
      }))
      .filter((user) => authUser.uid !== user.userId)
      .sort((user1, user2) => user2.dateCreated - user1.dateCreated);
  });
}

export default useNewUsers;