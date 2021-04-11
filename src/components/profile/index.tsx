import {
  Flex,
  Image,
  Text,
  useDisclosure,
  Button,
  SkeletonCircle,
} from '@chakra-ui/react';
import { useActiveUser } from '../../context/active-user';
import FollowButton from '../shared/FollowButton';
import EditProfileModal from './EditProfileModal';
import UserProfileSkeleton from '../skeleton/UserProfileSkeleton';
import useUser from '../../hooks/useUser';

function UserProfile({ userId }: { userId: string }) {
  const {
    data: user,
    isLoading: isProfileLoading,
  }: { data: any; isLoading: boolean } = useUser(userId);

  const { activeUser } = useActiveUser();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const isActiveUserProfile = user?.userId === activeUser?.userId;

  if (isProfileLoading) return <UserProfileSkeleton />;

  const { username, following, followers, pictureUrl, fullname } = user;

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

export default UserProfile;
