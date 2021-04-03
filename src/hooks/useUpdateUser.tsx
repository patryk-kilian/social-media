import { useMutation } from 'react-query';
import { db } from '../lib/firebase';
import { queryClient } from '../App';
import { useActiveUser } from '../context/active-user';

function useUpdateUser() {
  const { activeUser } = useActiveUser();

  return useMutation(
    async (userNewData: { fullname: string; pictureUrl: string }) => {
      await db.collection('users').doc(activeUser.docId).update(userNewData);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('user');
      },
    }
  );
}

export default useUpdateUser;
