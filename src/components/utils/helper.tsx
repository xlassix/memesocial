import {
  ChakraProps,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from '@chakra-ui/react';

interface CustomInputWithPrefixProps extends ChakraProps {
  prefix: string;
}

export const CustomInputWithPrefix = (props: CustomInputWithPrefixProps) => {
  return (
    <Stack spacing={2}>
      <InputGroup>
        <InputLeftAddon bg="transparent">{props.prefix}</InputLeftAddon>
        <Input {...props} />
      </InputGroup>
    </Stack>
  );
};
