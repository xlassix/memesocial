'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';
import Fonts from './fonts';
import { theme } from './theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig value={{}}>
      <ChakraProvider theme={theme}>
        <Fonts />
        {children}
      </ChakraProvider>
    </SWRConfig>
  );
}
