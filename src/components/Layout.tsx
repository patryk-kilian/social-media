import Header from './Header';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '../components/sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Flex pt='16' mx='auto' width='full' maxW='1200px'>
        <Box w='900px'>{children}</Box>
        <Sidebar />
      </Flex>
    </>
  );
}

export default Layout;
