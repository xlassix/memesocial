import axios from 'axios';

export default function apiHandler(url: string, data?: any, token?: string) {
  const isAbsoluteURL = url.startsWith('http://') || url.startsWith('https://');
  const finalURL = isAbsoluteURL ? url : `${window.location.origin}/api${url}`;

  return axios(finalURL, {
    method: data ? 'POST' : 'GET',
    data: JSON.stringify(data),
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return res.data;
  });
}

export const login = async (body: any) => {
  return await apiHandler('/account/login', body);
};

export const register = async (body: any) => {
  return await apiHandler('/account/register', body);
};

export const transfer = async (body: any) => {
  return await apiHandler(
    '/transfer',
    body,
    sessionStorage.getItem('token') ?? ''
  );
};
