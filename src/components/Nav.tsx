import React, { useEffect, useContext, useState } from 'react';
import {
  Text,
  HStack,
  useMediaQuery,
  Link,
  Avatar,
  Icon,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  Button,
} from '@chakra-ui/react';
import { Stack, StackDivider } from '@chakra-ui/layout';
import { Box, Flex } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { DropDown, Hamburger, LogoSVG, SettingsIcon } from '../assets/svg';
import { useRouter } from 'next/navigation';

const Nav = (props: any) => {
  const [openProfileBar, setOpenProfileBar] = useState(true);
  const router = useRouter();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Flex
        height="100%"
        alignItems="center"
        justifyContent="space-between"
        paddingY="1.5rem"
        border=""
        sx={{
          caretColor: 'transparent',
        }}
        marginX="1rem"
        fontWeight="700"
        borderBottom="2px solid #EFF0F2"
      >
        <LogoSVG height="2rem" />
        <Box>
          <Text>Clowns Behind this</Text>
          <Text>Why we exist</Text>
          <Button>Upload</Button>
        </Box>
      </Flex>
    </>
  );
};
export default Nav;
