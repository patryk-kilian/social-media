import { Flex, IconButton, Text } from '@chakra-ui/react';
import { FaRegHeart, FaComment, FaTrashAlt } from 'react-icons/fa';

function Actions() {
  return (
    <Flex p='2'>
      <Flex alignItems='center'>
        <IconButton
          isRound
          aria-label='like post'
          variant='ghost'
          icon={<FaRegHeart />}
          colorScheme='red'
          size='md'
        />
        <Text>1</Text>
      </Flex>
      <Flex alignItems='center' ml='2'>
        <IconButton
          isRound
          aria-label='like post'
          variant='ghost'
          icon={<FaComment />}
          colorScheme='purple'
          size='md'
        />
        <Text>1</Text>
      </Flex>
      <IconButton
        ml='auto'
        isRound
        aria-label='like post'
        variant='ghost'
        icon={<FaTrashAlt />}
        colorScheme='red'
        size='md'
      />
    </Flex>
  );
}

export default Actions;
