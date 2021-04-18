import { Flex, Link } from '@chakra-ui/react';
import { useActiveUser } from '../../context/active-user';
import { Link as RouterLink } from 'react-router-dom';
import { USERS } from '../../constants/routes';
import { FaUsers, FaUserAlt } from 'react-icons/fa';

function MobileMenu({ isOpen }: { isOpen: boolean }) {
  const { activeUser, isLoading } = useActiveUser();

  if (isLoading) return null;

  return isOpen ? (
    <Flex
      alignItems='center'
      direction='column'
      w='300px'
      bg='purple.500'
      pos='absolute'
      right='5px'
      borderRadius='md'
      p='2'
    >
      <Flex
        justify='center'
        align='center'
        p='2'
        borderBottom='1px solid white'
        width='100%'
      >
        <FaUserAlt size={25} fill='white' />
        <Link
          ml='2'
          fontWeight='bold'
          textTransform='uppercase'
          fontSize='xl'
          as={RouterLink}
          to={`/profile/${activeUser.userId}`}
          color='white'
        >
          Profile
        </Link>
      </Flex>
      <Flex justify='center' align='center' width='100%' p='2'>
        <FaUsers size={25} fill='white' />
        <Link
          as={RouterLink}
          fontWeight='bold'
          textTransform='uppercase'
          fontSize='xl'
          to={USERS}
          color='white'
          ml='2'
        >
          All users
        </Link>
      </Flex>
    </Flex>
  ) : null;
}

export default MobileMenu;
