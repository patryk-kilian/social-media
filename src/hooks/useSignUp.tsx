import { useState } from 'react';
import { useAuth } from '../context/auth-context';
import { useToast } from '@chakra-ui/react';
import { db } from '../lib/firebase';
import { useHistory } from 'react-router-dom';
import { DASHBOARD } from '../constants/routes';

const isUsernameExist = async (username: string) => {
  const result = await db
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.reduce((acc, user) => (user.data() ? true : false), false);
};

function useSignUp() {
  const [isLoading, setLoading] = useState(false);
  const { signup } = useAuth();
  const toast = useToast();
  const history = useHistory();

  const signUp = async (userData: any) => {
    setLoading(true);

    const existingUsername = await isUsernameExist(userData.name);

    if (!existingUsername) {
      try {
        const createdUser = await signup(userData);

        await createdUser.user.updateProfile({
          displayName: userData.name,
        });

        await db.collection('users').add({
          userId: createdUser.user.uid,
          username: userData.name.toLowerCase(),
          emailAdress: userData.email.toLowerCase(),
          following: [],
          followers: [],
          posts: [],
          dateCreated: Date.now(),
        });

        toast({
          title: 'Account created',
          description: 'You are logged in',
          status: 'success',
          isClosable: true,
          position: 'top',
        });

        setLoading(false);

        history.push(DASHBOARD);
      } catch (error) {
        toast({
          title: 'Signing Up failed',
          description: error.message,
          status: 'error',
          isClosable: true,
          position: 'top',
        });

        setLoading(false);
      }
    } else {
      toast({
        title: 'Signing Up failed',
        description: 'This username already exist',
        status: 'error',
        isClosable: true,
        position: 'top',
      });

      setLoading(false);
    }
  };

  return { signUp, isLoading };
}

export default useSignUp;
