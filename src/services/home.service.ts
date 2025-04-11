import type { AxiosResponse } from "axios";
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HomeService = (type: string) => Promise<AxiosResponse<any, any>>;

export const homeService: HomeService = (type) =>
  axios.get(`https://dog.ceo/api/breed/${type}/images`);
