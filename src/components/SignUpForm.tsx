import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Box,
  Button,
  InputRightElement,
  InputGroup,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import {
  nameValidate,
  passwordValidate,
  emailValidate,
} from '../utils/form-validate';
import { SIGN_IN } from '../constants/routes';
import useSignUp from '../hooks/useSignUp';

type FormData = {
  name: string;
  email: string;
  password: string;
};

function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm<FormData>();
  const { signUp, isLoading } = useSignUp();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSignUpSubmit = async (data: FormData) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    await signUp(userData);

    reset();
  };

  return (
    <Box mx='1' maxW='md' w='100%' p='9' borderWidth='1px' borderRadius='lg'>
      <Heading mb='4' size='lg' as='h3' textAlign='center'>
        Sign Up
      </Heading>
      <form onSubmit={handleSubmit(handleSignUpSubmit)}>
        <FormControl isInvalid={errors.name ? true : false} py='2'>
          <FormLabel htmlFor='name'>Username</FormLabel>
          <Input name='name' ref={register(nameValidate)} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.email ? true : false} py='2'>
          <FormLabel htmlFor='name'>Email</FormLabel>
          <Input name='email' ref={register(emailValidate)} />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password ? true : false} py='2'>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <InputGroup>
            <Input
              name='password'
              type={showPassword ? 'text' : 'password'}
              ref={register(passwordValidate)}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleShowPassword}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button
          mt='4'
          type='submit'
          colorScheme='purple'
          size='md'
          isFullWidth
          isLoading={isLoading ? true : false}
          loadingText='Signing Up'
        >
          Sign Up
        </Button>
      </form>
      <Text fontSize='xl' align='center' mt='4'>
        Already have account?{' '}
        <Link
          as={RouterLink}
          to={SIGN_IN}
          color='purple.800'
          fontWeight='medium'
        >
          Sign In{' '}
        </Link>
        instead
      </Text>
    </Box>
  );
}

export default SignUpForm;
