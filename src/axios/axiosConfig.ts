/* eslint-disable prettier/prettier */
import axios from 'axios';
import ENV from '../env';

const axiosConfig = axios.create({
  baseURL: ENV.baseURL,
  headers: {'Accept': 'application/json'},
  // withCredentials: true,
});

export default axiosConfig;
