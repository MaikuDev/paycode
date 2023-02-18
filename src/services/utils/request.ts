import axios from 'axios';
import { getCookie } from 'cookies-next';

const request = axios.create({
  baseURL: 'https://mapi.paycode.com.mx/api/challenge',
});

request.interceptors.response.use(
  (response) => {
    response = response?.data ?? response;

    return response;
  },
  (error) => {
    throw error?.response?.data ?? error;
  }
);

request.interceptors.request.use((config) => {
  const token = getCookie('token');

  if (token && !config?.headers?.authorization) {
    config.headers.authorization = `Beare  ${token}`;
  }

  return config;
});

export { request };
