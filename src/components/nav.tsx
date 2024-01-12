import React, { useEffect, useContext, useState } from 'react';
import {
  Button,
  IconButton,
  MenuDivider,
  MenuItemOption,
  MenuOptionGroup,
  Image,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { Stack, StackDivider } from '@chakra-ui/layout';
import { Box, Flex } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { LogoSVG } from '../assets/svg';
import { useRouter } from 'next/navigation';
import { Field, Formik } from 'formik';
import { SearchInput } from './form';
import { UploadModal } from './uploadModal';
import {
  useAddress,
  useConnect,
  useConnectionStatus,
  useDisconnect,
} from '@thirdweb-dev/react';
import { SignUp } from './signup';
import { useMe } from '@/shared/hooks';
import apiHandler from '@/shared/api';
import { mutate, useSWRConfig } from 'swr';

const Nav = (props: any) => {
  const { mutate } = useSWRConfig();
  const disconnect = useDisconnect();
  const connectionStatus = useConnectionStatus();
  const address = useAddress();
  const router = useRouter();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { userData } = useMe();
  console.log({
    connectionStatus,
    address,
    userData,
    data: userData?.user?.avatar && userData?.user?.address,
  });

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
          {userData?.user?.avatar && userData?.user?.address ? (
            <Flex>
              <UploadModal address={userData?.user?.address} />
              <Menu closeOnSelect={false}>
                <MenuButton
                  as={Button}
                  padding={'0 0 0 1rem'}
                  bg="transparent"
                  _hover={{ bg: 'transparent' }}
                  _focus={{}}
                >
                  <Flex>
                    {userData?.user?.avatar !== null ? (
                      <Image
                        borderRadius="full"
                        h="2.5rem"
                        w="100%"
                        objectFit="cover"
                        alt=""
                        src={userData?.user?.avatar}
                      />
                    ) : null}
                  </Flex>
                </MenuButton>
                <MenuList minWidth="240px">
                  <MenuItem
                    textTransform={'uppercase'}
                    fontWeight={'900'}
                    color={'#525866'}
                    _hover={{
                      color: '#0A0D14',
                      bg: 'white',
                      border: '1px solid #EEEBFF',
                      boxShadow: '0px 24px 56px -4px #585C5F29',
                    }}
                    fontSize={'1rem'}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    textTransform={'uppercase'}
                    fontWeight={'900'}
                    color={'#525866'}
                    _hover={{
                      color: '#0A0D14',
                      bg: 'white',
                      border: '1px solid #EEEBFF',
                      boxShadow: '0px 24px 56px -4px #585C5F29',
                    }}
                    fontSize={'1rem'}
                  >
                    Why We exist
                  </MenuItem>
                  <MenuItem
                    textTransform={'uppercase'}
                    fontWeight={'900'}
                    color={'#525866'}
                    _hover={{
                      color: '#0A0D14',
                      bg: 'white',
                      border: '1px solid #EEEBFF',
                      boxShadow: '0px 24px 56px -4px #585C5F29',
                    }}
                    fontSize={'1rem'}
                  >
                    The Clowns Behind this
                  </MenuItem>
                  <MenuItem
                    textTransform={'uppercase'}
                    onClick={async () => {
                      await Promise.all([
                        disconnect(),
                        apiHandler('/auth', {}, 'DELETE'),
                      ]);
                      mutate('/auth');
                    }}
                    fontWeight={'900'}
                    color={'#525866'}
                    _hover={{
                      color: '#0A0D14',
                      bg: 'white',
                      border: '1px solid #EEEBFF',
                      boxShadow: '0px 24px 56px -4px #585C5F29',
                    }}
                    fontSize={'1rem'}
                  >
                    Log out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <SignUp />
          )}
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
