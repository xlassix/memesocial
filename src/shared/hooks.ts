import useSWR from 'swr';
import apiHandler from './api';
import { ILogin } from '@/pages/api/auth';

export interface ISearchMeme {
  fileId: string;
  shortDescription: string;
  title: string;
  type: string;
}

export interface IUserDetails {
  statusCode: number;
  memes: Meme[];
  user: IUserDetails;
  _count: Count;
}

interface Meme {
  fileId: string;
  shortDescription: string;
  title: string;
  type: string;
  downloadCount: number;
  _count: MemeCount;
}

interface MemeCount {
  likedBy: number;
  CommentsBy: number;
}

export interface IUserDetails {
  address: string;
  joinedAt: string; // ISO date string format
  lastSeen: string; // ISO date string format
  avatar: string; // URL
  email: string;
  username: string | null;
  twitter: string;
  instagram: string;
  tiktok: string;
  profileDescription: string;
  name: string | null;
  authMethod: string | null;
  smartWallet: string | null;
  _count: UserCount;
}

interface UserCount {
  uploadedMemes: number;
}

interface Count {
  uploadedMemes: number;
}

export interface IUser {
  address: string;
  joinedAt: string; // ISO date string format
  lastSeen: string; // ISO date string format
  avatar: string; // URL
  email: string;
  username: string | null;
  twitter: string;
  instagram: string;
  tiktok: string;
  profileDescription: string;
  name: string | null;
  authMethod: string | null;
  smartWallet: string | null;
}

export interface userData {
  user?: IUser;
  time: string;
}

export const useSearchMeme = (search = '') => {
  const { data, error } = useSWR(`/ai?search=${search}`, (url) =>
    apiHandler(url, {}, 'GET')
  );

  return {
    data: (data?.memes ?? []) as ISearchMeme[],
    isLoading: !data && !error,
    error,
  };
};

export const useSearchUserMeme = (search = '', address = '') => {
  const { data, error } = useSWR(
    address
      ? `/user?search=${search}&address=${address}`
      : `/user?search=${search}`,
    (url) => apiHandler(url, {}, 'GET')
  );

  return {
    data: (data?.memes ?? []) as ISearchMeme[],
    user: (data?.user ?? []) as IUserDetails,
    isLoading: !data && !error,
    error,
  };
};

export const useMe = (payload?: ILogin) => {
  const { data, error } = useSWR(`/auth`, (url) =>
    apiHandler(url, payload ?? '', 'GET')
  );

  return {
    userData: data as userData,
    isLoading: !data && !error,
    error,
  };
};

export const useWalletBalance = () => {
  const { data, error } = useSWR(`/wallet`, (url) =>
    apiHandler(url, '', 'GET')
  );

  return {
    reward: data as { balance: number },
    isLoading: !data && !error,
    error,
  };
};
