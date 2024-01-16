import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { client } from '@/lib/client';
import { useStorageUpload } from '@thirdweb-dev/react';
import AvatarEditor from 'react-avatar-editor';
import { Picture, ProfileUploadPlaceHolder } from '@/assets/svg';
type Props = {
  saveData: (e: {
    fileType: string;
    fileCid: string;
    extraDetails: string[];
  }) => void;
  isInvalid: boolean;
};

export const UploadMeme = ({ saveData, isInvalid }: Props) => {
  const { mutateAsync: upload } = useStorageUpload();

  const toast = useToast();
  const [data, setData] = useState<any>();
  const [isUploadDone, setUploadDone] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState<any>();
  const [images, setImages] = useState([]);

  const handleUpload = async (file: any) => {
    setProgress(0);
    setUploadDone(false);
    try {
      // console.log(await upload({
      //   data: [file], options: {
      //     onProgress(event) {
      //       console.log(event)
      //     },
      //   }
      // }))
      const _added = await client.add(file, {
        progress: (prog) => {
          setProgress(Math.max(0, prog / file.size - 0.01));
        },
      });

      setProgress(1);
      // throw new Error("Reached")
      return _added.path;
    } catch (e: any) {
      console.log(e.message);
    }
    setUploadDone(true);
  };

  const getBase64Size = (base64String: string): number => {
    const stringLength = base64String.length - 'data:image/jpeg;base64,'.length;
    const sizeInBytes = 4 * Math.ceil(stringLength / 3) * 0.5624896334383812;
    return sizeInBytes;
  };

  const captureImageAtSecond = (video: any, second: any, canvas: any) => {
    return new Promise((resolve, reject) => {
      video.currentTime = second;
      video.onseeked = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        let quality = 1; // Start with the highest quality
        let compressedImageUrl = canvas.toDataURL('image/jpeg', quality);

        // Check if the size is greater than 200KB
        while (getBase64Size(compressedImageUrl) > 200 * 1024 && quality > 0) {
          quality -= 0.1; // Decrease quality by 10%
          compressedImageUrl = canvas.toDataURL('image/jpeg', quality);
        }

        resolve(compressedImageUrl);
      };
      video.onerror = () => reject('Error during video processing.');
    });
  };

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      if (file?.size == 0) {
        toast({
          title: 'Unacceptable file',
          description: `File Size cant be Zero`,
          status: 'warning',
          position: 'top',
          duration: 9000,
          isClosable: true,
        });
        return;
      }
      if (file.type.startsWith('video/')) {
        try {
          const canvas = document.createElement('canvas');
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.src = URL.createObjectURL(file);
          video.onerror = () => {
            toast({
              title: 'Unacceptable Length',
              description: 'Error loading video metadata.',
              status: 'warning',

              position: 'top',
              duration: 9000,
              isClosable: true,
            });
          };

          video.onloadedmetadata = async () => {
            if (video.duration > 30) {
              toast({
                title: 'Unacceptable Length',
                description: `Video is longer than 30 seconds.`,
                status: 'warning',

                position: 'top',
                duration: 9000,
                isClosable: true,
              });
              setPreviewUrl('');
              setData(null);
              window.URL.revokeObjectURL(video.src);
            } else {
              setData(file);
              setPreviewUrl(video);
              const imagePromises: string[] = [];
              for (
                let second = 0;
                second < video.duration;
                second += Math.floor(Math.cbrt(video.duration))
              ) {
                imagePromises.push(
                  (await captureImageAtSecond(video, second, canvas)) as string
                );
              }
              setData(file);
              setPreviewUrl(video.src);
              const cid = await handleUpload(file);
              saveData({
                fileCid: cid ?? '',
                extraDetails: imagePromises,
                fileType: file.type,
              });
            }
          };
        } catch (e: any) {
          console.log(e);
          toast({
            title: 'Unacceptable File',
            description: `${e.message}`,
            status: 'warning',

            position: 'top',
            duration: 9000,
            isClosable: true,
          });
        }
      } else if (file.type.startsWith('image/')) {
        setData(file);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        const cid = await handleUpload(file);
        saveData({ fileCid: cid ?? '', extraDetails: [], fileType: file.type });

        return () => URL.revokeObjectURL(url);
      } else {
        setPreviewUrl('');
        setData(null);
      }
    }
  };
  return (
    <>
      <Box
        _invalid={{
          border: '1px solid #994949',
        }}
        position="relative"
        overflow="hidden"
        h="100%"
        width="100%"
        sx={{ caretColor: 'transparent' }}
        cursor="pointer"
        borderRadius="0.9rem"
        border={isInvalid ? '1px solid red' : '1px solid #E2E4E9'}
        boxShadow="0px 24px 56px -4px #585C5F29"
      >
        <>
          <Box width={['100%']} height={['100%']}>
            {!data && (
              <VStack
                position="absolute"
                left="0"
                top="0"
                height="100%"
                width="100%"
                justifyContent="center"
                fontWeight="600"
              >
                <Picture height="3.5rem" width="3.5rem" />
                <Flex gap="0.25rem" fontStyle={'italic'} fontWeight={'500'}>
                  <Text letterSpacing="0.25px" color="grey.darkest">
                    Drag and drop an image, or
                  </Text>
                  <Text borderBottom={'4px solid #6E3FF3'}>Browse</Text>
                </Flex>
                <Flex flexDirection="column" alignItems={'center'}>
                  <Text
                    fontSize="0.75rem"
                    fontStyle={'italic'}
                    fontWeight="400"
                    lineHeight="1.5rem"
                  >
                    High resolution images (png, jpg, gif)
                  </Text>
                  <Text
                    fontSize="0.75rem"
                    fontStyle={'italic'}
                    fontWeight="400"
                    lineHeight="1.5rem"
                  >
                    Videos (mp4)
                  </Text>
                  <Text
                    fontSize="0.75rem"
                    fontStyle={'italic'}
                    fontWeight="400"
                    lineHeight="1.5rem"
                  >
                    Animated gifs
                  </Text>
                </Flex>
              </VStack>
            )}
          </Box>
        </>
        {data?.type?.includes('image/') || data?.type?.includes('video/') ? (
          <>
            {data.type.startsWith('image/') ? (
              <Image
                position="absolute"
                left="0"
                top="0"
                width="100%"
                height="100%"
                src={previewUrl}
                fit="cover"
                alt="data"
              />
            ) : (
              <AspectRatio
                position="absolute"
                left="0"
                top="0"
                width="100%"
                height="100%"
              >
                <video src={previewUrl} controls style={{ maxWidth: '100%' }} />
              </AspectRatio>
            )}
            {progress != 1 && !isUploadDone ? (
              <Flex
                position="absolute"
                left="0"
                top="0"
                width="100%"
                height="100%"
                zIndex="2"
                bg="rgba(255,255,255,0.6)"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="2rem" color="green">
                  {`${Math.floor(progress * 1000) / 10}%`}
                </Text>
              </Flex>
            ) : null}
          </>
        ) : null}
        <Input
          cursor="pointer"
          position="absolute"
          left="0"
          top="20%"
          multiple={false}
          accept="image/*,video/*"
          type="file"
          _invalid={{
            border: '1px solid #994949',
          }}
          sx={{
            transform: 'scale(10)',
            opacity: 0,
          }}
          zIndex="3"
          onChange={async (event: any) => {
            handleFileChange(event);
          }}
        />
      </Box>
    </>
  );
};

export const ProfileAvatarEditor = ({ saveData, isInvalid }: any) => {
  const [isUploadDone, setUploadDone] = useState<boolean>(false);
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState<any>();
  const [modalState, setModalState] = useState(false);
  const elRef: any = useRef(null);
  const [preview, setPreview] = useState('');

  const handleCompressedUpload = async (file: any) => {
    setProgress(0);
    setUploadDone(false);
    try {
      const _added = await client.add(file, {
        progress: (prog) => {
          setProgress(prog / file.size);
        },
      });
      saveData(`https://gateway.lighthouse.storage/ipfs/${_added.path}`);
    } catch (e: any) {
      console.log(e.message);
    }
    setUploadDone(true);
  };

  return (
    <>
      <Flex
        my="0.75rem"
        borderRadius={'8px'}
        alignItems="center"
        flexDirection="column"
        cursor="pointer"
        border={isInvalid ? '1px solid red' : '1px solid #E2E4E9'}
      >
        <Box
          borderRadius={'8px'}
          position="relative"
          overflow="hidden"
          sx={{ caretColor: 'transparent' }}
        >
          {!data ? (
            <Flex
              padding="1.25rem"
              flexDirection="column"
              w="100%"
              aspectRatio={'1 / 1'}
              alignItems="center"
              justifyContent="center"
              border="1px solid #EAECF0"
            >
              <ProfileUploadPlaceHolder cursor="pointer" height="4.5rem" />

              <Text textAlign={'center'}>
                <span
                  style={{
                    color: '#6941C6',
                    fontWeight: '500',
                    paddingRight: '1rem',
                  }}
                >
                  Click to upload
                </span>
                or drag and drop
              </Text>
              <Text textAlign={'center'}>
                SVG, PNG, JPG or GIF (max. 800x400px)
              </Text>
            </Flex>
          ) : null}
          {data?.type?.includes('image/') ? (
            <>
              <Image width="100%" borderRadius="full" src={preview} alt="" />
              {progress != 1 && !isUploadDone && (
                <Flex
                  position="absolute"
                  left="0"
                  top="0"
                  width="100%"
                  height="100%"
                  zIndex="2"
                  bg="rgba(255,255,255,0.6)"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text fontSize="1.5rem" color="green">
                    {`${Math.floor(progress * 1000) / 10}%`}
                  </Text>
                </Flex>
              )}
            </>
          ) : null}
          <Input
            cursor="pointer"
            position="absolute"
            left="0"
            top="20%"
            multiple={false}
            accept="image/*"
            sx={{
              transform: 'scale(10)',
              opacity: 0,
            }}
            type="file"
            zIndex="3"
            onChange={async (event: any) => {
              setModalState(true);
              setData(event.target.files[0]);
            }}
          />
        </Box>
      </Flex>
      <Modal
        isCentered
        blockScrollOnMount={true}
        isOpen={modalState}
        onClose={() => {
          setModalState(false);
        }}
      >
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent borderRadius="1.2rem" maxWidth="23rem" bg="white">
          <ModalBody padding="1.5rem 1rem">
            <VStack>
              <AvatarEditor
                ref={elRef}
                image={data}
                width={250}
                height={250}
                color={[0, 0, 0, 0.15]}
                disableBoundaryChecks={false}
                borderRadius={125}
                border={25}
                backgroundColor="transparent"
                scale={1.1}
              />
              <Button
                variant={'primary'}
                w="100%"
                onClick={() => {
                  elRef.current.getImage().toBlob((blob: any) => {
                    const objectUrl = URL.createObjectURL(blob);
                    setPreview(objectUrl);
                    handleCompressedUpload(blob);
                  }, 'image/*');
                  setModalState(false);
                }}
              >
                Save
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
