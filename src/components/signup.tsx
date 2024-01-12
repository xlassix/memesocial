import {
  LogoSVG,
  LogoWithConnect,
  ProfilePlaceOlder,
  SocialApple,
  SocialGoogle,
} from '@/assets/svg';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  MediaRenderer,
  useConnectionStatus,
  useDisconnect,
  useEmbeddedWallet,
  useWallet,
} from '@thirdweb-dev/react';
import { CustomInput } from './uploadModal';
import { buildSignMessage } from '@/lib/helper';
import { useMe } from '@/shared/hooks';
import apiHandler, { UpdateUserAPI, signUpAPI } from '@/shared/api';
import { useSWRConfig } from 'swr';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { CustomInputWithPrefix } from './utils/helper';
import { ProfileAvatarEditor } from './uploadWigdet';

type LoginStatus =
  | 'init'
  | 'processing'
  | 'sending_email'
  | 'awaiting_auth_sign'
  | 'email_verification'
  | 'done';
export const SignUp = () => {
  const { mutate } = useSWRConfig();
  const [loginState, setLoginState] = useState<LoginStatus>('init');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isOpen, setModalStatus] = useState(false);
  const { userData, isLoading } = useMe();
  const { connect } = useEmbeddedWallet();

  const signInWithSocial = async (strategy: 'google' | 'apple') => {
    try {
      setLoginState('processing');
      const personalWallet = await connect({
        strategy: strategy,
      });
      const address = await personalWallet.getAddress();
      setLoginState('awaiting_auth_sign');
      const sig = await personalWallet.signMessage(
        buildSignMessage(address.toLowerCase(), userData.time)
      );
      const { user } = await signUpAPI({
        address,
        signature: sig,
        time: userData.time,
      });
      mutate('/auth');
      setLoginState('done');
      if (user?.avatar) {
        setModalStatus(false);
      }
    } catch (e: any) {
      setLoginState('init');
      console.log(e, e?.response?.data?.errors);
      setError(e?.response?.data?.errors[0] ?? e.message);
    }
  };

  return (
    <>
      <Button
        fontWeight="500"
        fontStyle={'italic'}
        variant={'primary'}
        onClick={() => setModalStatus(true)}
      >
        SignUp/In
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() =>
          ['init', 'done'].includes(loginState) || error
            ? setModalStatus(false)
            : null
        }
        isCentered={true}
        size={'sm'}
      >
        <ModalOverlay backdropFilter="blur(4px) hue-rotate(0deg)" />
        <ModalContent
          bg="white"
          padding="1rem 0"
          borderRadius={'1rem'}
          border="1px solid #F6F8FA"
        >
          <ModalBody>
            <Box>
              <Center marginBottom={'24px'}>
                {error ? (
                  <LogoWithConnect height="3rem" />
                ) : (
                  <LogoSVG height="3rem" />
                )}
              </Center>
              {error ? (
                <Box>
                  <Text textAlign={'center'} padding="0 1rem 1rem 1rem">
                    {error}
                  </Text>
                  <Button
                    w="100%"
                    fontWeight={'500'}
                    fontSize={'14px'}
                    lineHeight={1.5}
                    variant={'primary'}
                    onClick={() => setError('')}
                    mb="0.5rem"
                  >
                    Try Again
                  </Button>
                </Box>
              ) : [
                  'sending_email',
                  'processing',
                  'awaiting_auth_sign',
                ].includes(loginState) || isLoading ? (
                <Center bg="white" p="4rem 2rem" flexDirection="row">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="purple.500"
                    color="white"
                    size="xl"
                  />
                  <Text>{loginState}</Text>
                </Center>
              ) : (
                <>
                  {loginState === 'done' ? (
                    <UserInfoForm
                      setError={setError}
                      setLoginState={setLoginState}
                      done={() => {
                        mutate('/auth');
                        setModalStatus(false);
                      }}
                    />
                  ) : (
                    <>
                      {loginState === 'email_verification' ? null : (
                        <>
                          <SocialLoginButton
                            strategy="google"
                            signInWithSocial={() => signInWithSocial('google')}
                          />
                          <SocialLoginButton
                            strategy="apple"
                            signInWithSocial={() => signInWithSocial('google')}
                          />
                          <Center color={'#525866'}>
                            <Divider />
                            <Text px="1rem">OR</Text>
                            <Divider />
                          </Center>
                        </>
                      )}
                      <EmailSignIn
                        loginState={loginState}
                        setLoginState={setLoginState}
                        email={email}
                        setEmail={setEmail}
                      />
                    </>
                  )}
                </>
              )}
              {loginState !== 'done' ? (
                <Text
                  textAlign={'center'}
                  width="90%"
                  margin={'auto'}
                  fontWeight={'500'}
                  fontSize={'14px'}
                  lineHeight={1.5}
                  color="#868C98"
                >
                  By continuing you agree to Afrimeme&apos;s Terms of Service
                  and Privacy Policy
                </Text>
              ) : null}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

type SocialLoginProps = {
  strategy: 'google' | 'apple';
  signInWithSocial: (e: any) => void;
};

export const UserInfoForm = ({
  setLoginState,
  setError,
  done,
}: {
  done: () => void;
  setLoginState: any;
  setError: any;
}) => {
  const embeddedWallet = useWallet('embeddedWallet');
  const [data, setData] = useState<{ [key: string]: string }>({});
  return (
    <Box>
      {data?.x ? (
        <Box>
          <Center>
            <ProfilePlaceOlder height="3rem" />
          </Center>
          <Text
            py="0.5rem"
            lineHeight={1.5}
            fontSize={'14px'}
            color={'#868C98'}
            textAlign="center"
            width="75%"
            margin="auto"
          >
            Finally, let’s place an identity to your profile
          </Text>
          <Formik
            initialValues={{
              avatar: '',
            }}
            validationSchema={Yup.object().shape({
              avatar: Yup.string().required('Required'),
            })}
            onSubmit={async (values) => {
              try {
                setLoginState('processing');
                const user = await UpdateUserAPI({ ...data, ...values });
                setLoginState('init');
                done();
              } catch (e: any) {
                setLoginState('init');
                setError(e?.response?.data?.errors[0] ?? e.message);
              }
            }}
          >
            {({
              handleSubmit,
              errors,
              touched,
              values,
              setFieldTouched,
              setFieldValue,
            }) => (
              <>
                <form onSubmit={handleSubmit}>
                  <FormControl
                    isInvalid={
                      Boolean(errors.avatar) && Boolean(touched?.avatar)
                    }
                  >
                    <ProfileAvatarEditor
                      isInvalid={
                        Boolean(errors.avatar) && Boolean(touched?.avatar)
                      }
                      saveData={(e) => {
                        setFieldValue('avatar', e);
                      }}
                    />
                  </FormControl>
                  <Button
                    variant={'primary'}
                    w="100%"
                    type="submit"
                    fontWeight={'500'}
                  >
                    Proceed
                  </Button>
                </form>
              </>
            )}
          </Formik>
        </Box>
      ) : (
        <Formik
          initialValues={{
            description: '',
            instagram: '',
            tiktok: '',
            x: '',
            avatar: '',
          }}
          validationSchema={Yup.object().shape({
            x: Yup.string().required('Required'),
            tiktok: Yup.string().required('Required'),
            instagram: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
          })}
          onSubmit={async (values) => {
            setData({
              ...values,
              email: (await embeddedWallet?.getEmail()) ?? '',
            });
          }}
        >
          {({
            handleSubmit,
            errors,
            touched,
            values,
            setFieldTouched,
            setFieldValue,
          }) => (
            <>
              <form onSubmit={handleSubmit}>
                <Flex gap={'1rem'} mb="0.5rem" flexFlow="row wrap">
                  <Text
                    py="1.5rem"
                    textAlign={'center'}
                    fontWeight="500"
                    width="84%"
                    fontSize={'14px'}
                    lineHeight={1.5}
                    margin="auto"
                    color={'#868C98'}
                  >
                    Tell us more about you and how you can be reached outside of
                    SocialMeme
                  </Text>

                  <FormControl
                    position="relative"
                    isInvalid={
                      Boolean(errors.instagram) && Boolean(touched?.instagram)
                    }
                  >
                    <FormLabel
                      color="#0A0D14"
                      fontSize="14px"
                      fontWeight={'500'}
                      lineHeight={1.5}
                    >
                      Add a profile description
                      <span style={{ color: '#6E3FF3', fontSize: '1.2rem' }}>
                        *
                      </span>
                    </FormLabel>
                    <Field
                      as={Textarea}
                      placeholder="Write a short for your profile"
                      name="instagram"
                      id="instagram"
                    />
                    <FormErrorMessage>
                      {errors?.instagram?.toString()}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    position="relative"
                    isInvalid={Boolean(errors.x) && Boolean(touched?.x)}
                  >
                    <FormLabel
                      color="#0A0D14"
                      fontSize="14px"
                      fontWeight={'500'}
                      lineHeight={1.5}
                    >
                      Twitter
                      <span style={{ color: '#6E3FF3', fontSize: '1.2rem' }}>
                        *
                      </span>
                    </FormLabel>
                    <Field
                      as={CustomInputWithPrefix}
                      prefix="https://x.com/"
                      placeholder="Twitter Username"
                      name="x"
                      id="x"
                    />
                    <FormErrorMessage>
                      {errors?.description?.toString()}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    position="relative"
                    isInvalid={
                      Boolean(errors.description) &&
                      Boolean(touched?.description)
                    }
                  >
                    <FormLabel
                      color="#0A0D14"
                      fontSize="14px"
                      fontWeight={'500'}
                      lineHeight={1.5}
                    >
                      Instagram
                      <span style={{ color: '#6E3FF3', fontSize: '1.2rem' }}>
                        *
                      </span>
                    </FormLabel>
                    <Field
                      as={CustomInputWithPrefix}
                      prefix="https://instagram.com"
                      placeholder="Username"
                      name="description"
                      id="description"
                    />
                    <FormErrorMessage>
                      {errors?.description?.toString()}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    position="relative"
                    isInvalid={
                      Boolean(errors.tiktok) && Boolean(touched?.tiktok)
                    }
                  >
                    <FormLabel
                      color="#0A0D14"
                      fontSize="14px"
                      fontWeight={'500'}
                      lineHeight={1.5}
                    >
                      Tiktox
                      <span style={{ color: '#6E3FF3', fontSize: '1.2rem' }}>
                        *
                      </span>
                    </FormLabel>
                    <Field
                      as={CustomInputWithPrefix}
                      prefix="https://tiktok.com/@"
                      placeholder="Username"
                      name="tiktok"
                      id="tiktok"
                    />
                    <FormErrorMessage>
                      {errors?.tiktok?.toString()}
                    </FormErrorMessage>
                  </FormControl>
                  <Button
                    type="submit"
                    fontSize={'14px'}
                    lineHeight={1.5}
                    variant={'primary'}
                    w="100%"
                  >
                    Next
                  </Button>
                </Flex>
              </form>
            </>
          )}
        </Formik>
      )}
    </Box>
  );
};

export const SocialLoginButton = ({
  strategy,
  signInWithSocial,
}: SocialLoginProps) => {
  const firstChar = strategy.charAt(0).toUpperCase();
  const rest = strategy.slice(1);
  const strategyName = firstChar + rest;

  return (
    <Button
      width="100%"
      padding={'1rem'}
      marginBottom="1rem"
      display="inline-flex"
      color={strategy == 'google' ? 'white' : 'black'}
      background={strategy != 'google' ? 'white' : 'black'}
      alignItems="center"
      justifyContent="center"
      border={strategy != 'google' ? '1px solid black' : 'none'}
      borderRadius="8px"
      onClick={signInWithSocial}
      _focus={{
        border: '1px solid black',
      }}
    >
      <span style={{ marginRight: '10px' }}>
        {strategy == 'google' ? (
          <SocialGoogle height="24px" width="24px" />
        ) : null}
        {strategy == 'apple' ? (
          <SocialApple height="24px" width="24px" />
        ) : null}
      </span>{' '}
      <Text fontWeight="500">Sign in with {strategyName}</Text>
    </Button>
  );
};

export default function EmailSignIn({
  loginState,
  setLoginState,
  email,
  setEmail,
}: {
  loginState: LoginStatus;
  email: string;
  setEmail: (e: string) => void;
  setLoginState: (e: LoginStatus) => void;
}) {
  const [verificationCode, setVerificationCode] = useState<string>('');
  const { connect, sendVerificationEmail } = useEmbeddedWallet();

  const handleEmailEntered = async () => {
    if (!email) {
      alert('Please enter an email');
      return;
    }
    setLoginState('sending_email');
    await sendVerificationEmail({ email });
    setLoginState('email_verification');
  };

  const handleEmailVerification = async () => {
    if (!email || !verificationCode) {
      alert('Please enter an verification code');
      return;
    }
    await connect({ strategy: 'email_verification', email, verificationCode });
  };

  if (loginState === 'email_verification') {
    return (
      <>
        <p style={{ color: '#333' }}>
          Enter the verification code sent to your email
        </p>
        <CustomInput
          placeholder="Enter verification code"
          pattern="\d*"
          minLength="6"
          maxLength="6"
          value={verificationCode}
          onChange={(e: any) => setVerificationCode(e.target.value)}
        />
        <Button
          onClick={handleEmailVerification}
          variant={'primaryOutline'}
          w="100%"
          mb="1rem"
        >
          Verify
        </Button>
        <a onClick={() => setLoginState('init')}>
          <p
            style={{ color: '#6E3FF3', cursor: 'pointer', textAlign: 'center' }}
          >
            Go Back
          </p>
        </a>
      </>
    );
  }

  return (
    <>
      <Text padding={'0.5rem'}>
        Sign in with email
        <span style={{ color: '#6E3FF3', fontSize: '1.2rem' }}>*</span>
      </Text>
      <CustomInput
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <Button
        w="100%"
        fontWeight={'500'}
        fontSize={'14px'}
        lineHeight={1.5}
        variant={'primaryOutline'}
        onClick={handleEmailEntered}
        mb="0.5rem"
      >
        Sign in with email address
      </Button>
    </>
  );
}
