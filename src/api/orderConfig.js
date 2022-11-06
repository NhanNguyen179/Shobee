import axios from "axios";

const orderConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/sv3",
  headers: { "Bypass-Tunnel-Reminder": "true" },
});

// Add a request interceptor
orderConfig.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const accessToken =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0NjIwMjksImV4cCI6MTY3NDIzODAyOX0.0raz9tk69u_15HkZ_J4TkWfw6_QbQccWUvSLKj6jA00";
    if (accessToken) config.headers.Authorization = accessToken;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
orderConfig.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default orderConfig;
