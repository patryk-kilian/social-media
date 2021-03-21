import Header from './Header';
import { Box } from '@chakra-ui/react';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Box>{children}</Box>
    </>
  );
}

export default Layout;
