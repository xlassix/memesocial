import {
  CopyLink,
  Download,
  MimeViewClose,
  SocialFacebook,
  SocialReddit,
  SocialX,
} from '@/assets/svg';
import { ISearchMeme } from '@/shared/hooks';
import {
  AspectRatio,
  Box,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Text,
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import {
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';
import { useState } from 'react';

type Props = {
  isLoading: boolean;
  data: ISearchMeme[];
};

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

export const MemeView = ({ isLoading, data }: Props) => {
  const [viewMeme, setViewAbleMeme] = useState<ISearchMeme | null>(null);
  const toast = useToast();

  const DownloadLink = async (viewMeme: ISearchMeme) => {
    try {
      const url = `https://${
        process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID
      }.ipfscdn.io/ipfs/${viewMeme?.fileId}?filename=${
        viewMeme?.title
      }.${getFileExtension(viewMeme?.type ?? '')}`;
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`Failed to download file: ${response.statusText}`);

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `${viewMeme?.title}.${getFileExtension(
        viewMeme?.type ?? ''
      )}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error: any) {
      toast({
        title: 'Download error',
        description: `${error?.message}`,
        status: 'error',
        colorScheme: 'whatsapp',
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      {isLoading ? (
        <Center
          bg="white"
          p="4rem 2rem"
          w="100%"
          h="80vh"
          flexDirection="column"
          gap="1rem"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="purple.500"
            color="white"
            size="xl"
          />
          <Text>loading</Text>
        </Center>
      ) : (
        <SimpleGrid
          columns={[1, 2, 3, 4, 5, 6, 7, 8]}
          minChildWidth="20rem"
          gap="1rem"
          my="2rem"
        >
          {data.map((meme, index) => {
            return (
              <Box
                key={`meme-${index}`}
                padding="0.5rem"
                borderRadius={'10px'}
                border="1.03px solid #0000000D"
                boxShadow="0px 16.44894790649414px 41.12236785888672px -8.22447395324707px #585C5F29"
                onClick={() => {
                  setViewAbleMeme(meme);
                }}
              >
                <Tooltip label={meme.title}>
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={'600'}
                    color={'#20232D'}
                    letterSpacing={'-1.5'}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {meme.title}
                  </Text>
                </Tooltip>
                <>
                  {meme.type.startsWith('image/') ? (
                    <Image
                      borderRadius={'10px'}
                      width="100%"
                      height="20rem"
                      src={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${meme.fileId}`}
                      fit="cover"
                      alt="data"
                    />
                  ) : (
                    <AspectRatio
                      borderRadius={'10px'}
                      // objectFit={"contain"}
                      width="100%"
                      height="20rem"
                    >
                      <video
                        src={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${meme.fileId}`}
                        controls
                        style={{ maxWidth: '100%', maxHeight: '20erem' }}
                      />
                    </AspectRatio>
                  )}
                </>
                <Text
                  p="1rem 1rem 2rem 1rem"
                  display={'block'}
                  onClick={() => {
                    setViewAbleMeme(meme);
                  }}
                >
                  {meme.shortDescription}
                </Text>
              </Box>
            );
          })}
          {data.length < 8 ? Array(8 - data.length).fill(<Box />) : null}
        </SimpleGrid>
      )}
      <Modal
        isOpen={Boolean(viewMeme?.fileId)}
        onClose={() => setViewAbleMeme(null)}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(3px) hue-rotate(0deg)" />
        <ModalContent>
          <ModalBody>
            <Box bg="white" overflowY="scroll" padding={'2rem 1rem'}>
              <Flex justifyContent={'space-between'} my="1rem">
                <Text textTransform={'uppercase'} fontWeight={'700'}>
                  Share Meme
                </Text>
                <MimeViewClose
                  onClick={() => {
                    setViewAbleMeme(null);
                  }}
                  height="1.5rem"
                />
              </Flex>
              {viewMeme?.type.startsWith('image/') ? (
                <Image
                  borderRadius={'10px'}
                  objectFit="contain"
                  margin={'auto'}
                  src={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                  alt="data"
                />
              ) : (
                <Box
                  borderRadius={'10px'}
                  display={'block'}
                  margin={'auto'}
                  maxH={'80vh'}
                  maxW="100%"
                >
                  <video
                    src={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                    controls
                    style={{
                      maxWidth: '100%',
                      maxHeight: '70vh',
                      objectFit: 'contain',
                      margin: 'auto',
                    }}
                  />
                </Box>
              )}
              <SimpleGrid
                columns={[3, 4, 5]}
                minChildWidth="5.5rem"
                flexWrap={'wrap'}
                alignItems={'center'}
                justifyContent={'center'}
                margin={'1rem'}
              >
                {/* <a id="downloadButton" href={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}?filename=${viewMeme?.title}.${getFileExtension(viewMeme?.type ?? "")}`} download> */}
                <Flex
                  flexDirection="column"
                  padding="1rem"
                  gap="0.5rem"
                  boxShadow="0px 2px 4px 0px #1B1C1D0A"
                  border="1.03px solid #F6F8FA"
                  onClick={() => viewMeme && DownloadLink(viewMeme)}
                >
                  <Download height="2.25rem" />
                  <Text fontSize={'0.8rem'} textAlign={'center'}>
                    Download
                  </Text>
                </Flex>
                {/* </a> */}
                <TwitterShareButton
                  url={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                  title={`MemeSocial-${viewMeme?.title}`}
                  blankTarget
                >
                  <Flex
                    flexDirection="column"
                    padding="1rem"
                    gap="0.5rem"
                    boxShadow="0px 2px 4px 0px #1B1C1D0A"
                    border="1.03px solid #F6F8FA"
                  >
                    <SocialX height="2.25rem" />
                    <Text fontSize={'0.8rem'} textAlign={'center'}>
                      X
                    </Text>
                  </Flex>
                </TwitterShareButton>
                <RedditShareButton
                  url={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                  title={`MemeSocial-${viewMeme?.title}`}
                  blankTarget
                >
                  <Flex
                    flexDirection="column"
                    padding="1rem"
                    gap="0.5rem"
                    boxShadow="0px 2px 4px 0px #1B1C1D0A"
                    border="1.03px solid #F6F8FA"
                  >
                    <SocialReddit height="2.25rem" />
                    <Text fontSize={'0.8rem'} textAlign={'center'}>
                      Reddit
                    </Text>
                  </Flex>
                </RedditShareButton>
                <FacebookShareButton
                  url={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                  title={`MemeSocial-${viewMeme?.title}`}
                  blankTarget
                >
                  <Flex
                    flexDirection="column"
                    padding="1rem"
                    gap="0.5rem"
                    boxShadow="0px 2px 4px 0px #1B1C1D0A"
                    border="1.03px solid #F6F8FA"
                  >
                    <SocialFacebook height="2.25rem" />
                    <Text fontSize={'0.8rem'} textAlign={'center'}>
                      Facebook
                    </Text>
                  </Flex>
                </FacebookShareButton>
                <WhatsappShareButton
                  url={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                  title={`MemeSocial-${viewMeme?.title}`}
                  blankTarget
                >
                  <Flex
                    flexDirection="column"
                    padding="1rem"
                    gap="0.5rem"
                    boxShadow="0px 2px 4px 0px #1B1C1D0A"
                    border="1.03px solid #F6F8FA"
                  >
                    <WhatsappIcon
                      style={{ height: '2.25rem', margin: 'auto' }}
                    />
                    <Text fontSize={'0.8rem'} textAlign={'center'}>
                      Reddit
                    </Text>
                  </Flex>
                </WhatsappShareButton>
                <Flex
                  flexDirection="column"
                  padding="1rem"
                  gap="0.5rem"
                  boxShadow="0px 2px 4px 0px #1B1C1D0A"
                  border="1.03px solid #F6F8FA"
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      `https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`
                    );
                    toast({
                      title: 'Copied MemeLink',
                      description: ``,
                      status: 'success',
                      colorScheme: 'whatsapp',
                      position: 'top',
                      duration: 9000,
                      isClosable: true,
                    });
                  }}
                >
                  <CopyLink height="2.25rem" />
                  <Text fontSize={'0.8rem'} textAlign={'center'}>
                    Copy Link
                  </Text>
                </Flex>
              </SimpleGrid>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export const MemeViewUser = ({ isLoading, data }: Props) => {
  const [viewMeme, setViewAbleMeme] = useState<ISearchMeme | null>(null);
  const toast = useToast();
  return (
    <>
      {isLoading ? (
        <Center
          bg="white"
          p="4rem 2rem"
          w="100%"
          h="80vh"
          flexDirection="column"
          gap="1rem"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="purple.500"
            color="white"
            size="xl"
          />
          <Text>loading</Text>
        </Center>
      ) : (
        <SimpleGrid
          columns={[1, 2, 3, 4, 5, 6, 7, 8]}
          minChildWidth="16.4rem"
          gap="1rem"
          my="2rem"
        >
          {data.map((meme, index) => {
            return (
              <Box
                key={`meme-${index}`}
                padding="0.5rem"
                borderRadius={'10px'}
                border="1.03px solid #0000000D"
                boxShadow="0px 16.44894790649414px 41.12236785888672px -8.22447395324707px #585C5F29"
                onClick={() => {
                  setViewAbleMeme(meme);
                }}
              >
                <Tooltip label={meme.title}>
                  <Text
                    textTransform={'uppercase'}
                    fontWeight={'600'}
                    color={'#20232D'}
                    letterSpacing={'-1.5'}
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {meme.title}
                  </Text>
                </Tooltip>
                <>
                  {meme.type.startsWith('image/') ? (
                    <Image
                      borderRadius={'10px'}
                      width="100%"
                      height="20rem"
                      src={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${meme.fileId}`}
                      fit="cover"
                      alt="data"
                    />
                  ) : (
                    <AspectRatio
                      borderRadius={'10px'}
                      // objectFit={"contain"}
                      width="100%"
                      height="20rem"
                    >
                      <video
                        src={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${meme.fileId}`}
                        controls
                        style={{ maxWidth: '100%', maxHeight: '20erem' }}
                      />
                    </AspectRatio>
                  )}
                </>
                <Text
                  p="1rem 1rem 2rem 1rem"
                  display={'block'}
                  onClick={() => {
                    setViewAbleMeme(meme);
                  }}
                >
                  {meme.shortDescription}
                </Text>
              </Box>
            );
          })}
          {data.length < 8 ? Array(8 - data.length).fill(<Box />) : null}
        </SimpleGrid>
      )}
      <Modal
        isOpen={Boolean(viewMeme?.fileId)}
        onClose={() => setViewAbleMeme(null)}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(3px) hue-rotate(0deg)" />
        <ModalContent>
          <ModalBody>
            <Box bg="white" overflowY="scroll" padding={'2rem 1rem'}>
              <Flex justifyContent={'space-between'} my="1rem">
                <Text textTransform={'uppercase'} fontWeight={'700'}>
                  Share Meme
                </Text>
                <MimeViewClose
                  onClick={() => {
                    setViewAbleMeme(null);
                  }}
                  height="1.5rem"
                />
              </Flex>
              {viewMeme?.type.startsWith('image/') ? (
                <Image
                  borderRadius={'10px'}
                  objectFit="contain"
                  margin={'auto'}
                  src={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                  alt="data"
                />
              ) : (
                <Box
                  borderRadius={'10px'}
                  display={'block'}
                  margin={'auto'}
                  maxH={'80vh'}
                  maxW="100%"
                >
                  <video
                    src={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                    controls
                    style={{
                      maxWidth: '100%',
                      maxHeight: '70vh',
                      objectFit: 'contain',
                      margin: 'auto',
                    }}
                  />
                </Box>
              )}
              <SimpleGrid
                columns={[3, 4, 5]}
                minChildWidth="5.5rem"
                flexWrap={'wrap'}
                alignItems={'center'}
                justifyContent={'center'}
                margin={'1rem'}
              >
                {/* <a id="downloadButton" href={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}?filename=${viewMeme?.title}.${getFileExtension(viewMeme?.type ?? "")}`} download> */}
                <Flex
                  flexDirection="column"
                  padding="1rem"
                  gap="0.5rem"
                  boxShadow="0px 2px 4px 0px #1B1C1D0A"
                  border="1.03px solid #F6F8FA"
                  onClick={() => viewMeme && DownloadLink(viewMeme)}
                >
                  <Download height="2.25rem" />
                  <Text fontSize={'0.8rem'} textAlign={'center'}>
                    Download
                  </Text>
                </Flex>
                {/* </a> */}
                <TwitterShareButton
                  url={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                  title={`MemeSocial-${viewMeme?.title}`}
                  blankTarget
                >
                  <Flex
                    flexDirection="column"
                    padding="1rem"
                    gap="0.5rem"
                    boxShadow="0px 2px 4px 0px #1B1C1D0A"
                    border="1.03px solid #F6F8FA"
                  >
                    <SocialX height="2.25rem" />
                    <Text fontSize={'0.8rem'} textAlign={'center'}>
                      X
                    </Text>
                  </Flex>
                </TwitterShareButton>
                <RedditShareButton
                  url={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                  title={`MemeSocial-${viewMeme?.title}`}
                  blankTarget
                >
                  <Flex
                    flexDirection="column"
                    padding="1rem"
                    gap="0.5rem"
                    boxShadow="0px 2px 4px 0px #1B1C1D0A"
                    border="1.03px solid #F6F8FA"
                  >
                    <SocialReddit height="2.25rem" />
                    <Text fontSize={'0.8rem'} textAlign={'center'}>
                      Reddit
                    </Text>
                  </Flex>
                </RedditShareButton>
                <FacebookShareButton
                  url={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                  title={`MemeSocial-${viewMeme?.title}`}
                  blankTarget
                >
                  <Flex
                    flexDirection="column"
                    padding="1rem"
                    gap="0.5rem"
                    boxShadow="0px 2px 4px 0px #1B1C1D0A"
                    border="1.03px solid #F6F8FA"
                  >
                    <SocialFacebook height="2.25rem" />
                    <Text fontSize={'0.8rem'} textAlign={'center'}>
                      Facebook
                    </Text>
                  </Flex>
                </FacebookShareButton>
                <WhatsappShareButton
                  url={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`}
                  title={`MemeSocial-${viewMeme?.title}`}
                  blankTarget
                >
                  <Flex
                    flexDirection="column"
                    padding="1rem"
                    gap="0.5rem"
                    boxShadow="0px 2px 4px 0px #1B1C1D0A"
                    border="1.03px solid #F6F8FA"
                  >
                    <WhatsappIcon
                      style={{ height: '2.25rem', margin: 'auto' }}
                    />
                    <Text fontSize={'0.8rem'} textAlign={'center'}>
                      Reddit
                    </Text>
                  </Flex>
                </WhatsappShareButton>
                <Flex
                  flexDirection="column"
                  padding="1rem"
                  gap="0.5rem"
                  boxShadow="0px 2px 4px 0px #1B1C1D0A"
                  border="1.03px solid #F6F8FA"
                  onClick={async () => {
                    await navigator.clipboard.writeText(
                      `https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${viewMeme?.fileId}`
                    );
                    toast({
                      title: 'Copied MemeLink',
                      description: ``,
                      status: 'success',
                      colorScheme: 'whatsapp',
                      position: 'top',
                      duration: 9000,
                      isClosable: true,
                    });
                  }}
                >
                  <CopyLink height="2.25rem" />
                  <Text fontSize={'0.8rem'} textAlign={'center'}>
                    Copy Link
                  </Text>
                </Flex>
              </SimpleGrid>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
