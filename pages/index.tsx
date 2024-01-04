import { SWRConfig } from 'swr';
import Nav from '@/components/nav';
import { useState } from 'react';
import { ISearch, useSearchMeme } from '@/shared/hooks';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share';
import { AspectRatio, Box, Center, Flex, Image, Modal, ModalBody, ModalContent, ModalOverlay, SimpleGrid, Spinner, Text, useToast } from '@chakra-ui/react';
import { CopyLink, Download, MimeViewClose } from '@/assets/svg';

function getFileExtension(fileType: string) {
  // Split the string by '/' and get the last part
  const parts = fileType.split('/');
  if (parts.length > 1) {
    // The subtype may include additional details after a '+', such as 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    const subtypeParts = parts[1].split('+');
    return subtypeParts[0]; // Return the part before '+'
  }
  return ''; // Return empty string if the type does not have a subtype
}


const LandingPage = ({ fallback }: any) => {
  const [search, setSearch] = useState("")
  const [viewMeme, setViewAbleMeme] = useState<ISearch | null>(null)
  const { isLoading, data } = useSearchMeme(search)
  const toast = useToast()
  return <SWRConfig value={{}}>
    <Nav setSearch={setSearch} search={search} />
    {isLoading ?
      <Center bg="white" p="4rem 2rem" w="100vw" h="80vh" flexDirection="column" gap="1rem">
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
                  borderRadius={"10px"}
                  width="100%"
                  height="20rem"
                  src={`https://gateway.lighthouse.storage/ipfs/${meme.fileId}`}
                  fit="cover"
                  alt="data"
                /> :
                <AspectRatio
                  borderRadius={"10px"}
                  // objectFit={"contain"}
                  width="100%"
                  height="20rem">
                  <video src={`https://gateway.lighthouse.storage/ipfs/${meme.fileId}`} controls style={{ maxWidth: '100%' }} />
                </AspectRatio>
            }
            </>
            <Text p="1rem 1rem 2rem 1rem" display={"block"} onClick={() => {
              setViewAbleMeme(meme)
              console.log(meme)
            }}>{meme.shortDescription}</Text>
          </Box>
        })}
        {data.length < 8 ? Array(8 - data.length).fill(<Box />) : null}
      </SimpleGrid>}
    <Modal
      isOpen={Boolean(viewMeme?.fileId)}
      onClose={() => setViewAbleMeme(null)}
      size={'full'}
    >
      <ModalOverlay backdropFilter="blur(3px) hue-rotate(0deg)" />
      <ModalContent>
        <ModalBody>
          <Box bg="white" overflowY="scroll" padding={"2rem 1rem"}>
            <Flex justifyContent={"space-between"} my="1rem">
              <Text textTransform={"upperCase"} fontWeight={"700"} >Share Meme</Text>
              <MimeViewClose onClick={() => { setViewAbleMeme(null) }} height="1.5rem" />
            </Flex>
            {
              viewMeme?.type.startsWith('image/') ?
                <Image
                  borderRadius={"10px"}
                  objectFit="contain"
                  margin={"auto"}
                  src={`https://gateway.lighthouse.storage/ipfs/${viewMeme?.fileId}`}
                  alt="data"
                /> :
                <Box
                  borderRadius={"10px"}
                  display={"block"}
                  margin={"auto"}
                  maxH={"80vh"}
                  maxW="100%"
                >
                  <video src={`https://gateway.lighthouse.storage/ipfs/${viewMeme?.fileId}`} controls style={{ maxWidth: '100%', maxHeight: "70vh", objectFit: "contain", margin: "auto" }} />
                </Box>
            }
            <Flex alignItems={"center"} justifyContent={"center"} margin={"1rem"}>
              <a id="downloadButton" href={`https://gateway.lighthouse.storage/ipfs/${viewMeme?.fileId}`} download={`${viewMeme?.title}.${getFileExtension(viewMeme?.type ?? "")}`} target='_blank'>
                <Flex flexDirection="column" padding="1rem" gap="0.5rem" boxShadow="0px 2px 4px 0px #1B1C1D0A"
                  border="1.03px solid #F6F8FA"
                >
                  <Download height="2rem" />
                  <Text>Copy Link</Text>
                </Flex>
              </a>
              <Flex flexDirection="column" padding="1rem" gap="0.5rem" boxShadow="0px 2px 4px 0px #1B1C1D0A"
                border="1.03px solid #F6F8FA"
                onClick={async () => {
                  await navigator.clipboard.writeText(`https://gateway.lighthouse.storage/ipfs/${viewMeme?.fileId}`);
                  toast({
                    title: 'Copied MemeLink',
                    description: ``,
                    status: "success",
                    colorScheme: "whatsapp",
                    position: 'top',
                    duration: 9000,
                    isClosable: true,
                  });
                }}
              >
                <CopyLink height="2rem" />
                <Text>Copy Link</Text>
              </Flex>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  </SWRConfig >
};


export default LandingPage;


