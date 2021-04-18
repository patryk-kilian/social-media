import {
  Flex,
  Image,
  Text,
  useDisclosure,
  Button,
  SkeletonCircle,
  useBreakpointValue,
} from '@chakra-ui/react';
import EditProfileModal from './EditProfileModal';
import FollowButton from '../shared/FollowButton';
import { userTypes } from '../../types';
import { format } from 'date-fns';

function Header({
  user,
  activeUser,
}: {
  user: userTypes;
  activeUser: userTypes;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonSize = useBreakpointValue({ base: 'xs', sm: 'sm', md: 'md' });
  const {
    username,
    following,
    followers,
    pictureUrl,
    fullname,
    posts,
    dateCreated,
  } = user;

  const isActiveUserProfile = user?.userId === activeUser?.userId;

  return (
    <Flex p={['4', '6']} pos='relative'>
      <Image
        src={pictureUrl || '/images/user-placeholder.jpg'}
        fallback={<SkeletonCircle size='150px' />}
        alt='user'
        boxSize={['80px', '100px', '150px']}
        borderRadius='full'
        objectFit='cover'
      />
      <Flex direction='column' maxW='450px' w='full' ml='4'>
        {isActiveUserProfile ? (
          <Button
            pos={['static', 'absolute']}
            mb='2'
            top='6'
            right='6'
            size={buttonSize}
            maxW={['100px', 'auto']}
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
        <Text fontSize={['md', 'xl', '2xl']}>{username}</Text>
        <Flex justify='space-between' py={['2', '8', '4']}>
          <Text fontSize={['sm', 'xl']}>posts:&nbsp;{posts.length}</Text>
          <Text fontSize={['sm', 'xl']}>
            followers:&nbsp;{followers?.length}
          </Text>
          <Text fontSize={['sm', 'xl']}>
            following:&nbsp;{following?.length}
          </Text>
        </Flex>
        {fullname && <Text fontSize={['md', 'xl', '2xl']}>{fullname}</Text>}
        <Text
          color='gray.700'
          fontSize={['sm', 'lg']}
          pos={['static', 'absolute']}
          bottom='10'
          right='6'
        >
          Joined: {format(dateCreated, 'MMMM YYY')}
        </Text>
      </Flex>

      <EditProfileModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Header;
