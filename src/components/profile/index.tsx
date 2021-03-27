import { Flex, Image, Text } from '@chakra-ui/react';
import { UserTypes } from '../../types/types';
import { useActiveUser } from '../../context/active-user';
import FollowButton from '../shared/FollowButton';

function UserProfile({ user }: { user: UserTypes }) {
  const { activeUser } = useActiveUser();

  const { username, following, followers } = user;

  return (
    <Flex p='6' pos='relative'>
      <Image
        src='/images/user-placeholder.jpg'
        alt='user'
        boxSize='150px'
        borderRadius='full'
      />
      <Flex direction='column' maxW='450px' w='full' ml='4'>
        <Text fontSize='2xl'>{username}</Text>
        <Flex justify='space-between' mt='4'>
          <Text fontSize='xl'>posts:&nbsp;5</Text>
          <Text fontSize='xl'>followers:&nbsp;{followers?.length}</Text>
          <Text fontSize='xl'>following:&nbsp;{following?.length}</Text>
        </Flex>
      </Flex>
      <FollowButton
        pos='absolute'
        top='6'
        right='6'
        size='md'
        activeUser={activeUser}
        user={user}
      />
    </Flex>
  );
}

export default UserProfile;
