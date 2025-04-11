import axios from "axios";

export const homeInterceptor = () => {
  axios.interceptors.response.use((response) => {
    return response;
  });
};
