import { useEffect } from 'react';
import { Center } from '@chakra-ui/react';
import SignUpForm from '../components/SignUpForm';

function SignUp() {
  useEffect(() => {
    document.title = 'Sign Up';

    return () => {
      document.title = 'Social Media';
    };
  }, []);

  return (
    <Center w='100%' h='100vh' as='section'>
      <SignUpForm />
    </Center>
  );
}

export default SignUp;
