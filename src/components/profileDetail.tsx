import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { SocialInstagram, SocialTikTok, SocialXClear } from '@/assets/svg';
import { IUserDetails } from '@/shared/hooks';

export const ProfileDetails = ({
  isLargerThan768,
  isLoading,
  user,
}: {
  isLargerThan768: boolean;
  isLoading: boolean;
  user: IUserDetails;
}) => {
  return (
    <Box
      sx={
        isLargerThan768
          ? {
              width: '250px',
              maxH: '30rem',
              position: 'sticky',
              top: '8rem',
            }
          : {}
      }
    >
      {!isLoading ? (
        <Box
          boxShadow="0px 16px 32px -12px #585C5F1A"
          border="1px solid #F6F8FA"
        >
          <Image
            borderRadius="8px"
            w="5rem"
            aspectRatio={'1 / 1'}
            objectFit="cover"
            mx="auto"
            alt=""
            src={user?.avatar}
          />
          <Text
            fontSize={'16px'}
            py="0.5rem"
            textTransform={'uppercase'}
            fontWeight={'500'}
            lineHeight={1}
            textAlign={'center'}
          >
            {user.twitter}
          </Text>
          <Flex
            justifyContent="center"
            border="1px solid #F6F8FA"
            boxShadow="0px 16px 32px -12px #585C5F1A"
            p="0.5rem"
          >
            <Text fontSize={'14px'}>
              <span
                style={{
                  fontWeight: '700',
                  marginRight: '0.5rem',
                  color: '#20232D',
                }}
              >
                {user?._count?.uploadedMemes}
              </span>
              Uploads
            </Text>
          </Flex>
          <Box
            boxShadow="0px 16px 32px -12px #585C5F1A"
            m="0.5rem"
            border="1px solid #F6F8FA"
            minH={'8rem'}
          >
            <Text fontSize="14px" padding={'0.5rem'}>
              {user.profileDescription}
            </Text>
          </Box>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            gap="1rem"
            padding={'0.5rem'}
          >
            {user?.twitter ? (
              <a href={`https://x.com/${user?.twitter}`} target="_blank">
                <SocialXClear height="2.5rem" padding="0.25rem" />
              </a>
            ) : null}
            {user?.instagram ? (
              <a
                href={`https://instagram.com/${user?.instagram}`}
                target="_blank"
              >
                <SocialInstagram height="2.5rem" padding="0.25rem" />
              </a>
            ) : null}
            {user?.tiktok ? (
              <a href={`https://tiktok.com/@${user?.tiktok}`} target="_blank">
                <SocialTikTok height="2.5rem" padding="0.25rem" />
              </a>
            ) : null}
          </Flex>
        </Box>
      ) : null}
    </Box>
  );
};
