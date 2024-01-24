import React from 'react';
import {
  Button,
  Image,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/layout';
import { LogoSVG } from '../assets/svg';
import { useRouter } from 'next/navigation';
import { Field, Formik } from 'formik';
import { SearchInput } from './form';
import { UploadModal } from './uploadModal';
import { useDisconnect } from '@thirdweb-dev/react';
import { SignUp } from './signup';
import { useMe, useWalletBalance } from '@/shared/hooks';
import apiHandler from '@/shared/api';
import { useSWRConfig } from 'swr';

const Nav = (props: any) => {
  const { mutate } = useSWRConfig();
  const disconnect = useDisconnect();
  const router = useRouter();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { userData } = useMe();
  const { reward, isLoading } = useWalletBalance();

  return (
    <>
      <Flex
        top="0"
        bg="white"
        zIndex={'5'}
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        padding={isLargerThan768 ? '1rem' : '1rem 0.5rem'}
        border=""
        sx={{
          caretColor: 'transparent',
        }}
        fontWeight="700"
        position={'sticky'}
        borderBottom="1px solid #E2E4E9"
      >
        <LogoSVG height="2rem" onClick={() => router.push('/')} />
        {isLargerThan768 ? (
          <Box flexBasis={'40%'}>
            <Formik
              initialValues={{
                search: props?.props ?? '',
              }}
              onSubmit={(values) => {
                props.setSearch(values.search);
              }}
            >
              {({ handleSubmit }) => (
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
        <Flex alignItems={'stretch'} gap="0.25rem" fontStyle={'italic'}>
          {userData?.user?.profileDescription && userData?.user?.address ? (
            <>
              {!isLoading ? (
                <Flex
                  height={'40px'}
                  rounded="0.5rem"
                  padding="0.4rem 1rem"
                  border="1px solid #F6F8FA"
                  mr="1rem"
                  alignItems={'center'}
                  justifyContent={'center'}
                  boxShadow="0px 16px 32px -12px #585C5F1A"
                  background="linear-gradient(0deg, #F6F8FA, #F6F8FA),linear-gradient(0deg, #FFFFFF, #FFFFFF)"
                >
                  <Image src={'./crown.png'} h="18px" w="18px" alt={'crown'} />
                  <Text
                    ml="0.25rem"
                    color="#2B1664"
                    fontWeight="800"
                    fontStyle="italic"
                    fontSize="17px"
                    lineHeight={1.5}
                  >
                    {reward?.balance}MEMT
                  </Text>
                </Flex>
              ) : null}
              <UploadModal address={userData?.user?.address} />
              <Menu closeOnSelect={true}>
                <MenuButton
                  height={'40px'}
                  as={Button}
                  padding={'0 0 0 1rem'}
                  bg="transparent !important"
                  _hover={{ bg: 'transparent' }}
                  _focus={{ bg: 'transparent' }}
                >
                  <Flex>
                    {userData?.user?.avatar !== null ? (
                      <Image
                        border="1px solid #CAC2FF"
                        borderRadius="8px"
                        w="2.5rem"
                        aspectRatio={'1 / 1'}
                        objectFit="cover"
                        alt=""
                        src={
                          userData?.user?.avatar ??
                          'https://gateway.lighthouse.storage/ipfs/QmNYrSm4fYE7M9SDj25XGAzydRYxJgMZ3ZTckgjz1EGv8p'
                        }
                      />
                    ) : null}
                  </Flex>
                </MenuButton>
                <MenuList minWidth="240px">
                  <MenuItem
                    px="1rem"
                    textTransform={'uppercase'}
                    fontWeight={'900'}
                    color={'#525866'}
                    _hover={{
                      px: '1rem',
                      color: '#0A0D14',
                      bg: 'white',
                      border: '1px solid #EEEBFF',
                      boxShadow: '0px 24px 56px -4px #585C5F29',
                    }}
                    fontSize={'1rem'}
                    onClick={() => {
                      router.push(`/user/me`);
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    px="1rem"
                    textTransform={'uppercase'}
                    onClick={async () => {
                      await Promise.all([
                        disconnect(),
                        apiHandler('/auth', {}, 'DELETE'),
                      ]);
                      mutate('/auth');
                      router.replace('/');
                    }}
                    fontWeight={'900'}
                    color={'#525866'}
                    _hover={{
                      px: '1rem',
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
            </>
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
            {({ handleSubmit }) => (
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
