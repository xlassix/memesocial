import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

export const SearchInput = (props: any) => {
  return (
    <InputGroup size="md" justifyContent="center" alignItems="center">
      <Input
        type={'text'}
        padding="1.25rem 1rem 1.25rem 2.25rem"
        border="1px solid #E2E4E9"
        placeholder="password"
        outline={'none'}
        borderRadius={'0.65rem'}
        my="0.5rem"
        boxShadow="0px 1px 2px 0px #E4E5E73D"
        sx={{
          '&:hover': {
            borderColor: 'purple.400',
            outlineColor: 'purple.400',
            boxShadow: 'none',
            outline: 'none',
            caretColor: 'black',
          },
        }}
        _placeholder={{
          fontStyle: 'italic',
          fontSize: '0.85rem',
          color: '#868C98',
        }}
        {...props}
      />
      <InputLeftElement height="3rem">
        <svg
          fill="#E2E4E9"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -4 20 22"
          width="1.5rem"
        >
          <path
            d="M9.25 2.5a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5Zm0 12a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Zm6.36.05 2.13 2.12-1.07 1.07-2.12-2.13 1.06-1.06Z"
            fill="#868C98A9"
          />
        </svg>
      </InputLeftElement>
    </InputGroup>
  );
};
