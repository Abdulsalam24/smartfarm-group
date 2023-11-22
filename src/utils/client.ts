import axios from "axios";
// @ts-ignore
import { getCookie, removeCookie } from "typescript-cookie";

const client = axios.create();

if (typeof window !== "undefined") {
  const token = getCookie("token");
  if (token) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete client.defaults.headers.common.Authorization;
  }
}

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error?.response || {};
    if (status === 403 || status === 411) {
      removeCookie("token");
    }
    return Promise.reject(error);
  }
);

export default client;
