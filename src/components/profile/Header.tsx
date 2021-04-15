import {
  Flex,
  Image,
  Text,
  useDisclosure,
  Button,
  SkeletonCircle,
} from '@chakra-ui/react';
import EditProfileModal from './EditProfileModal';
import FollowButton from '../shared/FollowButton';
import { userTypes } from '../../types';

function Header({
  user,
  activeUser,
}: {
  user: userTypes;
  activeUser: userTypes;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username, following, followers, pictureUrl, fullname } = user;

  const isActiveUserProfile = user?.userId === activeUser?.userId;

  return (
    <Flex p='6' pos='relative'>
      <Image
        src={pictureUrl || '/images/user-placeholder.jpg'}
        fallback={<SkeletonCircle size='150px' />}
        alt='user'
        boxSize='150px'
        borderRadius='full'
        objectFit='cover'
      />
      <Flex direction='column' maxW='450px' w='full' ml='4'>
        <Text fontSize='2xl'>{username}</Text>
        <Flex justify='space-between' my='4'>
          <Text fontSize='xl'>posts:&nbsp;5</Text>
          <Text fontSize='xl'>followers:&nbsp;{followers?.length}</Text>
          <Text fontSize='xl'>following:&nbsp;{following?.length}</Text>
        </Flex>
        {fullname && <Text fontSize='2xl'>{fullname}</Text>}
      </Flex>
      {isActiveUserProfile ? (
        <Button
          pos='absolute'
          top='6'
          right='6'
          size='md'
          colorScheme='purple'
          onClick={onOpen}
        >
          Edit profile
        </Button>
      ) : (
        <FollowButton
          pos='absolute'
          top='6'
          right='6'
          size='md'
          activeUser={activeUser}
          user={user}
        />
      )}

      <EditProfileModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Header;
