import axios from 'axios';


const REQUEST_TIMEOUT = 5000;
const ACCESS_TOKEN_BACKEND_URL = 'http://84.201.188.117:5021/';
const BONUS_BACKEND_URL = 'http://84.201.188.117:5003/';

export const getAxiosTokenInstance = () => {
  const axiosInstance = axios.create({
    baseURL: ACCESS_TOKEN_BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
      'AccessKey': '891cf53c-01fc-4d74-a14c-592668b7a03c',
      'Content-Type': 'application/json'
    }
  });

  return axiosInstance;
};

export const getAxiosBonusInstance = () => {
  const axiosInstance = axios.create({
    baseURL: BONUS_BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return axiosInstance;
};
