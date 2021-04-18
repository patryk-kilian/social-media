import { Box, Text } from '@chakra-ui/react';

function Content({ postText }: { postText: string }) {
  return (
    <Box p='2' minH='100px'>
      <Text wordBreak='break-word' fontSize={['sm', 'md']}>
        {postText}
      </Text>
    </Box>
  );
}

export default Content;
