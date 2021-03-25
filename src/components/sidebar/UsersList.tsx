import { Box, Heading } from '@chakra-ui/react';
import User from './User';

function UsersList() {
  return (
    <Box>
      <Heading as='h3' textAlign='center' size='md'>
        New users:
      </Heading>
      <Box as='ul'>
        <User />
        <User />
        <User />
      </Box>
    </Box>
  );
}

export default UsersList;
