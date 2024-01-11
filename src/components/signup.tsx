import { LogoSVG, SocialApple, SocialGoogle } from '@/assets/svg';
import {
  Box,
  Button,
  Center,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MediaRenderer, useEmbeddedWallet } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';

export const SignUp = () => {
  const [isOpen, setModalStatus] = useState(false);

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
        onClose={() => setModalStatus(false)}
        isCentered={true}
      >
        <ModalOverlay backdropFilter="blur(3px) hue-rotate(0deg)" />
        <ModalContent>
          <ModalBody>
            <Box
              bg="white"
              padding="1rem"
              borderRadius={'1rem'}
              border="1px solid #F6F8FA"
            >
              <Center marginBottom={'24px'}>
                <LogoSVG height="3rem" />
              </Center>
              <SocialLoginButton strategy="google" />
              <SocialLoginButton strategy="apple" />
              <Center color={'#525866'}>
                <Divider />
                <Text px="1rem">OR</Text>
                <Divider />
              </Center>
              <Text
                textAlign={'center'}
                width="90%"
                margin={'auto'}
                fontWeight={'500'}
                fontSize={'14px'}
                lineHeight={1.5}
                color="#868C98"
              >
                By continuing you agree to Afrimeme's Terms of Service and
                Privacy Policy
              </Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

type SocialLoginProps = {
  strategy: 'google' | 'apple';
};

export const SocialLoginButton = ({ strategy }: SocialLoginProps) => {
  const { connect } = useEmbeddedWallet();

  const firstChar = strategy.charAt(0).toUpperCase();
  const rest = strategy.slice(1);
  const strategyName = firstChar + rest;

  const signInWithSocial = async () => {
    const personalWallet = await connect({
      strategy: strategy,
    });
    const sig = await personalWallet.signMessage('This must be signed');
    console.log(sig);
  };

  return (
    <button
      style={{
        width: '100%',
        height: '42px',
        marginBottom: '1rem',
        display: 'inline-flex',
        fontWeight: '500',
        color: strategy == 'google' ? 'white' : 'black',
        background: strategy != 'google' ? 'white' : 'black',
        alignItems: 'center',
        justifyContent: 'center',
        border: strategy != 'google' ? '1px solid black' : 'none',
        caretColor: 'transparent',
        borderRadius: '8px',
      }}
      onClick={signInWithSocial}
    >
      <span style={{ marginRight: '10px' }}>
        {strategy == 'google' ? (
          <SocialGoogle height="24px" width="24px" />
        ) : null}
        {strategy == 'apple' ? (
          <SocialApple height="24px" width="24px" />
        ) : null}
      </span>{' '}
      Sign in with {strategyName}
    </button>
  );
};
