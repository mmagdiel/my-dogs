import type { AxiosResponse } from "axios";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LoginService = () => Promise<AxiosResponse<any, any>>;

export const loginService: LoginService = () =>
  axios.get("https://dog.ceo/api/breeds/image/random");
