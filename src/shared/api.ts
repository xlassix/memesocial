import axios from 'axios';

export default function apiHandler(
  url: string,
  data?: any,
  method: 'POST' | 'GET' | 'DELETE' | 'PUT' = 'GET'
) {
  const isAbsoluteURL = url.startsWith('http://') || url.startsWith('https://');
  const finalURL = isAbsoluteURL ? url : `${window.location.origin}/api${url}`;

  return axios(finalURL, {
    method,
    data: JSON.stringify(data),
    // withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    return res.data;
  });
}

export const uploadDataAPI = async (body: any) => {
  return await apiHandler('/ai', body, 'POST');
};

export const signUpAPI = async (body: { [key: string]: string }) => {
  return await apiHandler('/auth/', body, 'POST');
};

export const UpdateUserAPI = async (body: { [key: string]: string }) => {
  return await apiHandler('/user', body, 'POST');
};
