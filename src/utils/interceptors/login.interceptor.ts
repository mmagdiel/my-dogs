import axios from "axios";
import type { AxiosResponse } from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginFunction = (response: AxiosResponse<any, any>) => {
  return {
    ...response,
    data: {
      ...response.data,
      token: "asdf",
    },
  };
};

export const loginInterceptor = () => {
  axios.interceptors.response.use(loginFunction);
};
