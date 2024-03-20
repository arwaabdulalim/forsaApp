import axios from 'axios';
import {Platform} from 'react-native';

const apiClient = axios.create({
  baseURL: 'https://forsa-staging.bit68.com/api/v1/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
export const apiService = () => {
  return apiClient;
};
// Intercept all requests
apiClient.interceptors.request.use(
  async config => {
    return config;
  },
  error => Promise.reject(error),
);
// Intercept all responses
export function extractAPIErrorResponse(axios: any) {
  axios.interceptors.response.use(undefined, async function (error: any) {
    error.originalMessage = error.message;
    Object.defineProperty(error, 'message', {
      get: function () {
        return `${error.response?.data?.message}`;
      },
    });
    return Promise.reject(error);
  });
}
extractAPIErrorResponse(apiClient);
