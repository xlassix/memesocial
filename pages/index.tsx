import { SWRConfig } from 'swr';
import Nav from '@/components/nav';
import { useState } from 'react';
import { useSearchMeme } from '@/shared/hooks';
import { AspectRatio, Box, Center, Image, SimpleGrid, Spinner, Text } from '@chakra-ui/react';

const LandingPage = ({ fallback }: any) => {
  const [search, setSearch] = useState("")
  const { isLoading, data } = useSearchMeme(search)
  return <SWRConfig value={{}}>
    <Nav setSearch={setSearch} search={search} />
    {isLoading ?
      <Center bg="white" p="4rem 2rem" flexDirection="row">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="purple.500"
          color="white"
          size="xl"
        />
        <Text>loading</Text>
      </Center> :
      <SimpleGrid columns={[1, 2, 3, 4, 5, 6, 7, 8]} minChildWidth="20rem" gap="1rem" my="2rem">
        {data.map((meme, index) => {
          return <Box key={`meme-${index}`} padding="0.5rem" borderRadius={"10px"}
            border="1.03px solid #0000000D"
            boxShadow="0px 16.44894790649414px 41.12236785888672px -8.22447395324707px #585C5F29"
          >
            <Text textTransform={"uppercase"} fontWeight={"600"} color={"#20232D"} letterSpacing={"-1.5"}>
              {meme.title}
            </Text>
            <>{
              meme.type.startsWith('image/') ?
                <Image
                  left="0"
                  top="0"
                  borderRadius={"10px"}
                  width="100%"
                  height="20rem"
                  src={`https://gateway.lighthouse.storage/ipfs/${meme.fileId}`}
                  fit="cover"
                  alt="data"
                /> :
                <AspectRatio
                  borderRadius={"10px"}
                  left="0"
                  top="0"
                  objectFit={"contain"}
                  width="100%"
                  height="20rem">
                  <video src={`https://gateway.lighthouse.storage/ipfs/${meme.fileId}`} controls style={{ maxWidth: '100%' }} />
                </AspectRatio>
            }
            </>
            <Text p="1rem 1rem 2rem 1rem">{meme.shortDescription}</Text>
          </Box>
        })}
        {data.length < 8 ? Array(8 - data.length).fill(<Box />) : null}

      </SimpleGrid>}
  </SWRConfig >
};


export default LandingPage;


