import { SWRConfig } from 'swr';
import { useMe, useSearchUserMeme } from '@/shared/hooks';
import { MemeViewUser } from '@/components/memeView';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ProfileDetails } from '@/components/profileDetail';


const UserPage = ({ fallback, search, params }: any) => {
    const router = useRouter()
    const { isLoading, data, user } = useSearchUserMeme(search, params?.userAddress)
    useEffect(() => {
        if (!isLoading && !user?.address) {
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

export async function getStaticPaths() {
    return {
        paths: [
            '/user/404',
        ],
        fallback: true,
    }
}


export async function getStaticProps(data: any) {
    return {
        props: {
            params: data.params,
        },
    }
}

export default UserPage;
