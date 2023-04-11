import axios from 'axios';

const REQUEST_TIMEOUT = 5000;
const ACCESS_TOKEN_BACKEND_URL = 'http://84.201.188.117:5021/';
const BONUS_BACKEND_URL = 'http://84.201.188.117:5003/';

export const getAxiosTokenInstance = () => {
  const axiosInstance = axios.create({
    baseURL: ACCESS_TOKEN_BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'AccessKey': process.env.REACT_APP_ACCESS_KEY,
      'Content-Type': 'application/json'
    }
  });

  return axiosInstance;
};

export const getAxiosBonusInstance = () => {
  const axiosInstance = axios.create({
    baseURL: BONUS_BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'AccessKey': process.env.REACT_APP_ACCESS_KEY,
      'Content-Type': 'application/json'
    }
  });

  return axiosInstance;
};
