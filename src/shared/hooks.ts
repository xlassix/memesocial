import useSWR from 'swr';
import apiHandler from './api';

export interface ISearch {
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
    data: (data?.memes ?? []) as ISearch[],
    isLoading: !data && !error,
    error,
  };
};
