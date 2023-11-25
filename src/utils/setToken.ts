import client from "./client";

export default function setToken(token: string) {
  if (token) {
    localStorage.setItem("token", token);
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete client.defaults.headers.common.Authorization;
  }
}
