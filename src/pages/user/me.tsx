import { SWRConfig } from 'swr';
import { useMe, useSearchUserMeme } from '@/shared/hooks';
import { MemeViewUser } from '@/components/memeView';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ProfileDetails } from '@/components/profileDetail';

const ProfilePage = ({ fallback, search }: any) => {
  const router = useRouter();
  const { isLoading, data, user } = useSearchUserMeme(search);
  const { userData, isLoading: isloadingUser } = useMe();
  useEffect(() => {
    if (
      !isLoading &&
      isloadingUser &&
      user.address.toLowerCase() !== userData?.user?.address.toLowerCase()
    ) {
      router.replace('/');
    }
  }, [userData, isLoading, user, isloadingUser]);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <SWRConfig value={{ fallback }}>
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

export default ProfilePage;
