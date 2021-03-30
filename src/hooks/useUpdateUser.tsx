import { useMutation } from 'react-query';
import { db } from '../lib/firebase';
import { queryClient } from '../App';
import { useActiveUser } from '../context/active-user';

export const useUpdateUser = () => {
  const { activeUser } = useActiveUser();

  return useMutation(
    async (userNewData: any) => {
      await db.collection('users').doc(activeUser.docId).update(userNewData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );
};
