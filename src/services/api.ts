import axios from 'axios';

const api = axios.create({ baseURL: process.env.API_URL });

// api.interceptors.request.use((config: AxiosRequestConfig) => {
//   const token = localStorage.getItem('@token');

//   config.headers.Authorization = `Bearer ${token}`;

//   return config;
// });

// api.interceptors.response.use(
//   (res: AxiosResponse) => {
//     return res;
//   },
//   (error: AxiosError) => {
//     console.tron.error(error.response);
//     if (error.response?.status === 403) {
//       store.dispatch(AuthActions.signOutRequest());
//     }

//     return Promise.reject(error);
//   },
// );

export default api;
