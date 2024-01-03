// app/page.tsx
'use client';
import Nav from '@/components/nav';
import { Link } from '@chakra-ui/next-js';
import { Box } from '@chakra-ui/react';

export default function Page() {
  return (
    <Box>
      <Nav />
      <Link href="/about" color="blue.400" _hover={{ color: 'blue.500' }}>
        About
      </Link>
    </Box>
  );
}
