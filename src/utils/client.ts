import axios from "axios";
import { clearLoginUser } from "./setUser";

const client = axios.create();

if (typeof window !== "undefined") {
  // Get token from local storage
  const token = localStorage.getItem("token");

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
      // Remove token from local storage
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export default client;
