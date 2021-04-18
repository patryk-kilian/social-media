import { IconButton, Box } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

function MenuToggle({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) {
  return (
    <Box py='2' pl='4' display={['block', 'block', 'block', 'none']}>
      <IconButton
        onClick={toggle}
        aria-label='open menu'
        icon={<FaBars />}
        colorScheme='purple'
        size='sm'
        variant={isOpen ? 'solid' : 'outline'}
      />
    </Box>
  );
}

export default MenuToggle;
