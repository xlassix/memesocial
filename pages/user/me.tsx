import { SWRConfig } from 'swr';
import { useMe, useSearchUserMeme } from '@/shared/hooks';
import { MemeViewUser } from '@/components/memeView';
import { validateToken } from '@/lib/validate';
import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { SocialInstagram, SocialTikTok, SocialX, SocialXClear } from '@/assets/svg';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const ProfilePage = ({ fallback, search }: any) => {
    const router = useRouter()
    const { isLoading, data, user } = useSearchUserMeme(search)
    const { userData, isLoading: isloadingUser } = useMe()
    useEffect(() => {
        if ((!isLoading && isloadingUser) && user.address != userData?.user?.address) {
            router.replace("/")
        }
    },
        [userData, isLoading, user, isloadingUser])
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return <SWRConfig value={{ fallback }}>
        <Flex px="2rem" gap="1rem" justifyContent={"center"} position="sticky" display={isLargerThan768 ? "flex" : "block"}>
            <Box sx={isLargerThan768 ? {
                width: "250px",
                maxH: "30rem", position: "sticky",
                top: "8rem"
            } : {

            }}>
                {!isLoading ?
                    <Box boxShadow="0px 16px 32px -12px #585C5F1A" border="1px solid #F6F8FA">
                        <Image
                            borderRadius="8px"
                            w="5rem"
                            aspectRatio={'1 / 1'}
                            objectFit="cover"
                            mx="auto"
                            alt=""
                            src={user?.avatar}
                        />
                        <Text fontSize={"16px"} py="0.5rem" textTransform={"uppercase"} fontWeight={"500"} lineHeight={1} textAlign={"center"} >
                            {user.twitter}
                        </Text>
                        <Flex justifyContent="center" border="1px solid #F6F8FA" boxShadow="0px 16px 32px -12px #585C5F1A" p="0.5rem">
                            <Text fontSize={"14px"}>
                                <span style={{ fontWeight: "700", marginRight: "0.5rem", color: "#20232D" }}>
                                    {user?._count?.uploadedMemes}
                                </span>
                                Uploads
                            </Text>
                        </Flex>
                        <Box boxShadow="0px 16px 32px -12px #585C5F1A"
                            m="0.5rem"
                            border="1px solid #F6F8FA"
                            minH={"8rem"}>

                            <Text fontSize="14px"
                                padding={"0.5rem"}
                            >
                                {user.profileDiscription}
                            </Text>
                        </Box>
                        <Flex justifyContent={"center"} alignItems={"center"} gap="1rem" padding={"0.5rem"}>
                            {user?.twitter ?
                                <a href={`https://x.com/${user?.twitter}`} target="_blank">
                                    <SocialXClear height="2.5rem" padding="0.25rem" />
                                </a> : null
                            }
                            {user?.instagram ?
                                <a href={`https://instagram.com/${user?.instagram}`} target="_blank">
                                    <SocialInstagram height="2.5rem" padding="0.25rem" />
                                </a> : null}
                            {user?.tiktok ?
                                <a href={`https://tiktok.com/@${user?.tiktok}`} target="_blank">
                                    <SocialTikTok height="2.5rem" padding="0.25rem" />
                                </a> : null
                            }
                        </Flex>

                    </Box>
                    : null}
            </Box>
            <Box flexBasis={"80%"} >
                <MemeViewUser isLoading={isLoading} data={data} />
            </Box>
        </Flex>
    </SWRConfig >
};

export default ProfilePage;


