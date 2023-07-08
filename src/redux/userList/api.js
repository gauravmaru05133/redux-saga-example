import axios from 'axios';
import { apiConfig } from '../../utils/ApiConfig';
export const Api = payload => {
  const headers = {
    'Content-Type': 'application/json',
  };
  console.log("api_call_dat >",`${apiConfig.Api_Url}page=${payload}&results=10&seed=abc`)
  return axios({
    method: 'get',
    url: `${apiConfig.Api_Url}page=${payload}&results=10&seed=abc`,
    headers,
  });
};