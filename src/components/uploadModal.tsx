import CreatableSelect from 'react-select/creatable';
import * as Yup from 'yup';
import {
  Flex,
  Button,
  Input,
  Box,
  Text,
  Center,
  Spinner,
  useMediaQuery,
  ModalOverlay,
  ModalContent,
  Modal,
  ModalBody,
  Image,
  AspectRatio,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import { Field, Formik } from 'formik';
import { useState } from 'react';
import { UploadMeme } from './uploadWigdet';
import { uploadDataAPI } from '@/shared/api';
import { useSWRConfig } from 'swr';

interface IMemeData {
  fileId: string;
  title: string;
  shortDescription: string;
  summary: string;
  tags: string;
  type: string;
  url: string;
  updatedAt: string;
  createdAt: string;
}

export const CustomInput = (props: any) => {
  return (
    <Input
      padding="1.5rem 1rem"
      borderColor="#EFF0F2"
      border="1px solid #E2E4E9"
      borderRadius={'0.6rem'}
      marginBottom="2rem"
      placeholder={'Username'}
      _disabled={{
        opacity: 0.5,
        cursor: 'not-allowed',
        border: '2px solid black',
      }}
      _invalid={{
        border: '1px solid #E2E4E9',
      }}
      sx={{
        '&:hover': {
          caretColor: 'black',
        },
        '&:disabled': {
          opacity: '0.55',
          borderColor: '#EFF0F2', // Set the border color for disabled state
        },
      }}
      {...props}
    />
  );
};

export const UploadModal = ({ address }: { address: string }) => {
  const { mutate } = useSWRConfig();
  const [isOpen, setModalStatus] = useState(false);
  const [isProcessing, setProcessing] = useState(false);
  const [uploadData, setUploadData] = useState<IMemeData | null>(null);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const toast = useToast();

  return (
    <>
      <Button
        fontWeight="500"
        fontStyle={'italic'}
        textAlign={'center'}
        variant={'primaryOutline'}
        onClick={() => setModalStatus(true)}
        height={'40px'}
      >
        Upload Meme
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setModalStatus(false)}
        size={'full'}
      >
        <ModalOverlay backdropFilter="blur(3px) hue-rotate(0deg)" />
        <ModalContent>
          <ModalBody>
            <Box bg="white" overflowY="scroll">
              <Formik
                initialValues={{
                  address,
                  fileURL: '',
                  fileType: '',
                  extraDetails: [],
                  title: '',
                  description: '',
                  tags: [],
                }}
                validationSchema={Yup.object().shape({
                  address: Yup.string().required('Required'),
                  title: Yup.string().required('Required'),
                  fileURL: Yup.string().required('Required'),
                  fileType: Yup.string().required('Required'),
                  extraDetails: Yup.array().of(Yup.string()),
                  description: Yup.string().required('Required'),
                  tags: Yup.array()
                    .of(
                      Yup.object().shape({
                        value: Yup.string().required(),
                        label: Yup.string().required(),
                      })
                    )
                    .min(1, 'recommended two tags needed'),
                })}
                onSubmit={async (values) => {
                  try {
                    setProcessing(true);
                    setModalStatus(false);
                    const data = await uploadDataAPI(values);
                    setUploadData(data);
                    setProcessing(false);
                    mutate(`/ai?search=${''}`);
                    mutate(`/user?search=${''}`);
                  } catch (e: any) {
                    toast({
                      title: 'error',
                      status: 'error',
                      isClosable: true,
                      description: e?.response?.data ?? e.message,
                    });
                    setProcessing(false);
                  }
                }}
              >
                {({
                  handleSubmit,
                  errors,
                  touched,
                  values,
                  setFieldTouched,
                  setFieldValue,
                }) => (
                  <>
                    <form onSubmit={handleSubmit}>
                      <Flex
                        height="100%"
                        alignItems="center"
                        justifyContent="space-between"
                        padding={'1rem'}
                        border=""
                        sx={{
                          caretColor: 'transparent',
                        }}
                        marginX="1rem"
                        fontWeight="700"
                        borderBottom="1px solid #E2E4E9"
                      >
                        <Button
                          fontWeight="500"
                          fontStyle={'italic'}
                          variant={'primaryOutline'}
                          onClick={() => setModalStatus(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          fontWeight="500"
                          fontStyle={'italic'}
                          variant={'primary'}
                          type="submit"
                        >
                          Upload Meme
                        </Button>
                      </Flex>
                      <Flex
                        gap={'1rem'}
                        p={isLargerThan768 ? '2rem 3rem' : '1rem'}
                        mb="2rem"
                        pb="2rem"
                        flexFlow="row wrap"
                        h={'calc(100vh - 7rem)'}
                      >
                        <FormControl
                          flexBasis={isLargerThan768 ? '60%' : '100%'}
                          minH="20rem"
                          position="relative"
                          isInvalid={
                            Boolean(errors.fileURL) && Boolean(touched?.fileURL)
                          }
                        >
                          <UploadMeme
                            isInvalid={
                              Boolean(errors.fileURL) &&
                              Boolean(touched?.fileURL)
                            }
                            saveData={(e) => {
                              setFieldValue('fileURL', e.fileCid);
                              setFieldValue('fileType', e.fileType);
                              setFieldValue('extraDetails', e.extraDetails);
                            }}
                          />
                        </FormControl>
                        <Box
                          flexBasis={isLargerThan768 ? '38%' : '100%'}
                          boxShadow="0px 24px 56px -4px #585C5F29"
                          borderRadius="0.6rem"
                          border="1px solid #E2E4E9"
                          padding={'2.5rem'}
                          marginBottom="auto"
                        >
                          <FormControl
                            position="relative"
                            isInvalid={
                              Boolean(errors.title) && Boolean(touched?.title)
                            }
                          >
                            <Text
                              textTransform="uppercase"
                              color="#0A0D14"
                              fontSize="1rem"
                              fontWeight={'900'}
                            >
                              Give your mean a title
                            </Text>
                            <Field
                              as={CustomInput}
                              placeholder="Meme name"
                              name="title"
                              id="title"
                            />
                            <FormErrorMessage
                              position="absolute"
                              bottom="0.25rem"
                            >
                              {errors?.title?.toString()}
                            </FormErrorMessage>
                          </FormControl>
                          <FormControl
                            position="relative"
                            isInvalid={
                              Boolean(errors.description) &&
                              Boolean(touched?.description)
                            }
                          >
                            <Text
                              textTransform="uppercase"
                              color="#0A0D14"
                              fontSize="1rem"
                              fontWeight={'900'}
                            >
                              Add a short description
                            </Text>
                            <Field
                              as={CustomInput}
                              placeholder="Meme description"
                              name="description"
                              id="description"
                            />
                            <FormErrorMessage
                              position="absolute"
                              bottom="0.25rem"
                            >
                              {errors?.description?.toString()}
                            </FormErrorMessage>
                          </FormControl>
                          <FormControl
                            position="relative"
                            isInvalid={
                              Boolean(errors?.tags) && Boolean(touched.tags)
                            }
                          >
                            <FormLabel
                              textTransform="uppercase"
                              color="#0A0D14"
                              fontSize="1rem"
                              fontWeight={'900'}
                            >
                              Add Tags
                            </FormLabel>
                            <CreatableSelect
                              id="tags"
                              name="tags"
                              closeMenuOnSelect={false}
                              isMulti
                              options={[]}
                              isSearchable={true}
                              onChange={(item) => {
                                setFieldTouched('tags');
                                setFieldValue('tags', item);
                              }}
                              onBlur={() => {
                                setFieldTouched('tags');
                              }}
                              value={values.tags}
                              styles={{
                                control: (styles) => ({
                                  ...styles,
                                  paddingBlock: '.375rem',
                                  paddingInline: '.5rem',
                                  borderRadius: '8px',
                                  borderColor: 'gray.200',
                                  borderWidth: '1px',
                                }),
                              }}
                              placeholder={
                                <Text fontSize=".85rem">Add Tags</Text>
                              }
                              components={{
                                IndicatorSeparator: () => null,
                              }}
                            />
                            <FormErrorMessage>
                              {errors?.tags?.toString()}
                            </FormErrorMessage>
                          </FormControl>
                          <Text color="#868C98">
                            <span
                              style={{
                                color: '#525866',
                                marginRight: '0.5rem',
                              }}
                            >
                              Suggestions:
                            </span>
                            Funny, Nigerians, Wizdom, Pawpaw, Lasisi, Sinzu, dey
                            play
                          </Text>
                        </Box>
                        {!isLargerThan768 ? (
                          <Button
                            w="100%"
                            fontWeight="500"
                            fontStyle={'italic'}
                            variant={'primary'}
                            type="submit"
                          >
                            Upload Meme
                          </Button>
                        ) : null}
                      </Flex>
                    </form>
                  </>
                )}
              </Formik>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Modal
        isOpen={isProcessing || Boolean(uploadData)}
        onClose={() => (isProcessing ? null : setUploadData(null))}
        isCentered
      >
        <ModalOverlay backdropFilter="blur(3px) hue-rotate(0deg)" />

        <ModalContent bg="white">
          <ModalBody>
            <Box bg="white">
              {isProcessing || !uploadData ? (
                <Center bg="white" p="4rem 2rem" flexDirection="row">
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="purple.500"
                    color="white"
                    size="xl"
                  />
                  <Text>Processing</Text>
                </Center>
              ) : (
                <Box minH="20vh">
                  <Text
                    color="purple.500"
                    textAlign="center"
                    fontWeight="900"
                    fontSize="2rem"
                    lineHeight="1.1"
                    textTransform="uppercase"
                  >
                    Thank you for contributing to community
                  </Text>
                  <Box width="100%" height="60%">
                    {
                      <>
                        {uploadData.type.startsWith('image/') ? (
                          <Image
                            left="0"
                            top="0"
                            borderRadius={'10px'}
                            width="100%"
                            height="100%"
                            src={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${uploadData.fileId}`}
                            fit="cover"
                            alt="data"
                          />
                        ) : (
                          <AspectRatio
                            borderRadius={'10px'}
                            left="0"
                            top="0"
                            width="100%"
                            height="100%"
                          >
                            <video
                              src={`https://${process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}.ipfscdn.io/ipfs/${uploadData.fileId}`}
                              controls
                              style={{ maxWidth: '100%' }}
                            />
                          </AspectRatio>
                        )}
                      </>
                    }
                  </Box>
                  <Button
                    display="block"
                    variant={'primary'}
                    margin={'1rem 1rem 1rem auto'}
                    onClick={() => {
                      setUploadData(null);
                      setModalStatus(false);
                    }}
                  >
                    Continue
                  </Button>
                </Box>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
