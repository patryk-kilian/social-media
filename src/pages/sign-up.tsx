import { Center } from '@chakra-ui/react';
import SignUpForm from '../components/form/SignUpForm';

function SignUp() {
  return (
    <Center w='100%' h='100vh' as='section'>
      <SignUpForm />
    </Center>
  );
}

export default SignUp;
