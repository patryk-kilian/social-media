import { Center, Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { DASHBOARD } from '../constants/routes';

function NotFound() {
  return (
    <Center h='100vh'>
      <Box textAlign='center'>
        <Heading as='h2' fontSize='120px' color='purple.800'>
          OOPS!
        </Heading>
        <Text fontSize='5xl'>Page not found</Text>
        <Button
          as={RouterLink}
          to={DASHBOARD}
          variant='outline'
          colorScheme='purple'
          size='lg'
          mt='4'
        >
          Visit Homepage
        </Button>
      </Box>
    </Center>
  );
}

export default NotFound;
