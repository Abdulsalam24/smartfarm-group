import axios from "axios";
import { getCookie, removeCookie } from "typescript-cookie";
import { clearLoginUser } from "./setUser";

const client = axios.create();

console.log("tokenenene");

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
      clearLoginUser();
      removeCookie("token");
    }
    return Promise.reject(error);
  }
);

export default client;
