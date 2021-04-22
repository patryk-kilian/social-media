import { useState } from 'react';
import { useToast } from '@chakra-ui/react';
import { useAuth } from '../context/auth-context';
import { useHistory } from 'react-router-dom';
import { DASHBOARD } from '../constants/routes';

type SignInData = {
  password: string | undefined;
  email: string | undefined;
};

function useSignIn() {
  const [isLoading, setLoading] = useState(false);
  const { login } = useAuth();
  const toast = useToast();
  const history = useHistory();

  const handleSignIn = async (userData: SignInData) => {
    try {
      setLoading(true);

      await login(userData);

      toast({
        title: 'You are logged in',
        status: 'success',
        isClosable: true,
        position: 'top',
      });

      history.push(DASHBOARD);
    } catch (error) {
      toast({
        title: 'Signing In failed',
        description: error.message,
        status: 'error',
        isClosable: true,
        position: 'top',
      });
      setLoading(false);
    }
  };

  const signIn = (userData: SignInData) => {
    return handleSignIn(userData);
  };

  const demoSignIn = () => {
    const demoUserData = {
      password: process.env.REACT_APP_DEMO_PASS,
      email: process.env.REACT_APP_DEMO_EMAIL,
    };

    return handleSignIn(demoUserData);
  };

  return { demoSignIn, signIn, isLoading };
}

export default useSignIn;
