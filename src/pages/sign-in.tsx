import { Center } from '@chakra-ui/react';
import SignInForm from '../components/SignInForm';

function SignIn() {
  return (
    <Center w='100%' h='100vh' as='section'>
      <SignInForm />
    </Center>
  );
}

export default SignIn;
