import { Flex, Image, Text, Button } from '@chakra-ui/react';

function User() {
  return (
    <Flex py='2' as='li' alignItems='center'>
      <Image
        src='/images/user-placeholder.jpg'
        alt='user'
        boxSize='40px'
        mr='3'
        borderRadius='full'
      />
      <Text>Username</Text>
      <Button size='sm' ml='auto' variant='outline' colorScheme='purple'>
        Follow
      </Button>
    </Flex>
  );
}

export default User;
