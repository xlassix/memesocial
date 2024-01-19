import { SWRConfig } from 'swr';
import { useSearchUserMeme } from '@/shared/hooks';
import { MemeViewUser } from '@/components/memeView';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ProfileDetails } from '@/components/profileDetail';
import { usePathname } from 'next/navigation';
import Head from 'next/head';

const UserPage = (props: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoading, data, user } = useSearchUserMeme(
    props.search,
    pathname?.split('/')?.at(2)
  );
  useEffect(() => {
    if (!isLoading && !user?.address && pathname) {
      router.replace('/user/404');
    }
  }, [isLoading, user]);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <SWRConfig value={{}}>
      {user ? (
        <Head>
          <meta name="twitter:title" content={`Memesocial: ${user.twitter}`} />
          <meta property="og:title" content={`Memesocial: ${user.twitter}`} />
          <meta
            name="twitter:description"
            content={`${user.profileDescription}`}
          />
          <meta
            property="og:description"
            content={`${user.profileDescription}`}
          />
          <meta
            name="twitter:image"
            content={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${user.avatar}?h=500&w=500`}
          />
          <meta
            property="og:image"
            itemProp="image"
            content={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${user.avatar}?h=500&w=500`}
          />
        </Head>
      ) : null}
      <Flex
        px="2rem"
        gap="1rem"
        justifyContent={'center'}
        position="sticky"
        display={isLargerThan768 ? 'flex' : 'block'}
      >
        <ProfileDetails
          isLargerThan768={isLargerThan768}
          isLoading={isLoading}
          user={user}
        />
        <Box flexBasis={'80%'}>
          <MemeViewUser isLoading={isLoading} data={data} />
        </Box>
      </Flex>
    </SWRConfig>
  );
};

export default UserPage;
