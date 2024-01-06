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
  FormErrorMessage,
} from '@chakra-ui/react';
import { Stack, StackDivider } from '@chakra-ui/layout';
import { Box, Flex } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { DropDown, Hamburger, LogoSVG, SettingsIcon } from '../assets/svg';
import { useRouter } from 'next/navigation';
import { Field, Formik } from 'formik';
import { SearchInput } from './form';
import { UploadModal } from './uploadModal';

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
        padding={'1rem'}
        border=""
        sx={{
          caretColor: 'transparent',
        }}
        marginX="1rem"
        fontWeight="700"
        borderBottom="1px solid #E2E4E9"
      >
        <Flex align={'center'} gap="0.75rem">
          <LogoSVG height="2rem" />
          {isLargerThan768 ? (
            <Formik
              initialValues={{
                search: props?.props ?? '',
              }}
              onSubmit={(values) => {
                props.setSearch(values.search);
              }}
            >
              {({ handleSubmit, errors, touched, values }) => (
                <>
                  <form onSubmit={handleSubmit}>
                    <Field
                      as={SearchInput}
                      name="search"
                      id="search"
                      placeholder={'Find that meme, lol'}
                    />
                  </form>
                </>
              )}
            </Formik>
          ) : null}
        </Flex>
        <Flex align={'center'} gap="1rem" fontStyle={'italic'}>
          {isLargerThan768 ? (
            <Text px="0.5rem" fontWeight="300">
              Why we exist
            </Text>
          ) : null}
          <UploadModal />{' '}
        </Flex>
      </Flex>
      {!isLargerThan768 ? (
        <Box px="1rem">
          <Formik
            initialValues={{
              search: props?.props ?? '',
            }}
            onSubmit={(values) => {
              props.setSearch(values.search);
            }}
          >
            {({ handleSubmit, errors, touched, values }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <Field
                    as={SearchInput}
                    name="search"
                    id="search"
                    placeholder={'Find that meme, lol'}
                  />
                </form>
              </>
            )}
          </Formik>
        </Box>
      ) : null}
    </>
  );
};
export default Nav;
