import { useEffect, useState } from 'react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import Fonts from '@/app/fonts';
import { Providers } from '@/app/providers';
import NextProgress from 'next-progress';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { theme } from '@/app/theme';

const MyApp = ({ Component, pageProps }: any) => {
  const route = useRouter();

  const seo = {
    metaTitle: "AfriMeme",
    metaDescription: "decrip",
    shareImage: "dd",
    article: "sdsd"
  };

  // const { initialise } = usePreventHydrationError();

  // if (!initialise) {
  //   return (
  //     <Head>
  //       <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  //       {/* <Seo {...seo} /> */}
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <meta charSet="utf-8" />
  //     </Head>
  //   );
  // }

  return (
    <>
      <NextProgress delay={300} color="#EA445A" options={{ showSpinner: false }} />
      <ChakraProvider theme={theme}>
        <Fonts />
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
