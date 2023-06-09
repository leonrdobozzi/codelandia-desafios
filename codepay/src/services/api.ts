import axios, { AxiosInstance } from "axios";

export function api(BASE_URL: string): AxiosInstance {
  return axios.create({ baseURL: BASE_URL });
}
