import useSWR from 'swr';
import apiHandler from './api';

export interface ISearchMeme {
  fileId: string;
  shortDescription: string;
  title: string;
  type: string;
}

export const useSearchMeme = (search = '') => {
  const { data, error } = useSWR(`/ai?search=${search}`, (url) =>
    apiHandler(url)
  );

  return {
    data: (data?.memes ?? []) as ISearchMeme[],
    isLoading: !data && !error,
    error,
  };
};
