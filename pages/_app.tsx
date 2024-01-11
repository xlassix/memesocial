import { useEffect, useState } from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import Fonts from '@/app/fonts';
import { Providers } from '@/app/providers';
import { ThirdwebProvider, coinbaseWallet, embeddedWallet, localWallet, metamaskWallet, trustWallet, walletConnect } from "@thirdweb-dev/react";
import NextProgress from 'next-progress';
import { theme } from '@/app/theme';
import { ArbitrumNova } from "@thirdweb-dev/chains";
import { SpeedInsights } from '@vercel/speed-insights/next'


const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <NextProgress delay={300} color="#EA445A" options={{ showSpinner: false }} />
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        activeChain={ArbitrumNova}
        supportedWallets={[embeddedWallet({
          auth: {
            options: [
              "email",
              "google",
              "apple"
            ]
          }
        },),
        walletConnect({ projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID }),
        metamaskWallet({ connectionMethod: "metamaskBrowser" }),
        coinbaseWallet({}),
        trustWallet({}),
        localWallet()
        ]
        }
      >
        <ChakraProvider theme={theme}>
          <Fonts />
          <Providers>
            <Component {...pageProps} />
          </Providers>
        </ChakraProvider>
        <SpeedInsights />
      </ThirdwebProvider>
    </>
  );
};

export default MyApp;
