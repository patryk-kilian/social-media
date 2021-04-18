import { useState, useEffect } from 'react';
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
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { passwordValidate, emailValidate } from '../utils/form-validate';
import { Link as RouterLink } from 'react-router-dom';
import { SIGN_UP, DASHBOARD } from '../constants/routes';
import { useAuth } from '../context/auth-context';
import { useHistory } from 'react-router-dom';

type FormData = {
  name: string;
  email: string;
  password: string;
};

function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm<FormData>();
  const { login } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSignInSubmit = async (data: FormData) => {
    const userData = {
      password: data.password,
      email: data.email,
    };

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
    }

    setLoading(false);
    reset();
  };

  useEffect(() => {
    document.title = 'Sign In';

    return () => {
      document.title = 'Social Media';
    };
  }, []);

  return (
    <Box mx='1' maxW='md' w='100%' p='9' borderWidth='1px' borderRadius='lg'>
      <Heading mb='4' size='lg' as='h3' textAlign='center'>
        Sign In
      </Heading>
      <form onSubmit={handleSubmit(handleSignInSubmit)}>
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
          loadingText='Signing In'
        >
          Sign In
        </Button>
      </form>
      <Text fontSize='xl' align='center' mt='4'>
        Don't have account?{' '}
        <Link
          as={RouterLink}
          to={SIGN_UP}
          color='purple.800'
          fontWeight='medium'
        >
          Sign Up{' '}
        </Link>
        instead
      </Text>
    </Box>
  );
}

export default SignInForm;
