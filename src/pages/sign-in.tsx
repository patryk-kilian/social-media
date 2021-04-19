import { useEffect } from 'react';
import { Center } from '@chakra-ui/react';
import SignInForm from '../components/SignInForm';

function SignIn() {
  useEffect(() => {
    document.title = 'Sign In';

    return () => {
      document.title = 'Social Media';
    };
  }, []);

  return (
    <Center w='100%' h='100vh' as='section'>
      <SignInForm />
    </Center>
  );
}

export default SignIn;
