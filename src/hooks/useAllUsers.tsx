import { useQuery } from 'react-query';
import { db } from '../lib/firebase';
import { useAuth } from '../context/auth-context';

function useAllUsers() {
  const { authUser } = useAuth();

  return useQuery('users', async () => {
    const result = await db.collection('users').get();
    return result.docs
      .map((user: any) => ({
        ...user.data(),
        docId: user.id,
      }))
      .filter((user) => authUser.uid !== user.userId)
      .sort((user1, user2) => user2.dateCreated - user1.dateCreated);
  });
}

export default useAllUsers;
