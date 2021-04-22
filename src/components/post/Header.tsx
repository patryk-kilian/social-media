import { Flex, Box, SkeletonCircle, Image, Text } from '@chakra-ui/react';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';

type PostHeaderProps = {
  userAvatar: string | undefined;
  dateCreated: number;
  username: string;
  userId: string;
};

function Header({
  userAvatar,
  dateCreated,
  username,
  userId,
}: PostHeaderProps) {
  return (
    <Flex
      as='header'
      alignItems='center'
      borderBottom='2px solid'
      borderColor='purple.100'
      p='2'
      bg='gray.50'
    >
      <Image
        src={userAvatar || '/images/user-placeholder.jpg'}
        fallback={<SkeletonCircle size='40px' mr='4' />}
        alt='user'
        boxSize='40px'
        borderRadius='full'
        objectFit='cover'
        mr='4'
      />
      <Box>
        <Text as={RouterLink} to={`/profile/${userId}`}>
          {username}
        </Text>
        <Text fontSize='sm' color='gray.500'>
          {formatDistance(dateCreated, Date.now(), { addSuffix: true })}
        </Text>
      </Box>
    </Flex>
  );
}

export default Header;
