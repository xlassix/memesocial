import { SWRConfig } from 'swr';
import { useMe, useSearchUserMeme } from '@/shared/hooks';
import { MemeViewUser } from '@/components/memeView';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ProfileDetails } from '@/components/profileDetail';
import { usePathname } from 'next/navigation'


const UserPage = (props: any) => {
    const router = useRouter()
    const pathname = usePathname()
    const { isLoading, data, user } = useSearchUserMeme(props.search, pathname?.split("/")?.at(2))
    // console.log({ isLoading, address: user?.address, pathname, data: pathname?.split("/")?.at(2) })
    useEffect(() => {
        if (!isLoading && !user?.address && pathname) {
            router.replace("/user/404")
        }
    },
        [isLoading, user])
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return <SWRConfig value={{}}>
        <Flex px="2rem" gap="1rem" justifyContent={"center"} position="sticky" display={isLargerThan768 ? "flex" : "block"}>
            <ProfileDetails isLargerThan768={isLargerThan768} isLoading={isLoading} user={user} />
            <Box flexBasis={"80%"} >
                <MemeViewUser isLoading={isLoading} data={data} />
            </Box>
        </Flex>
    </SWRConfig >
};

export default UserPage;
