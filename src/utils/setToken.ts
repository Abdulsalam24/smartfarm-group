import { removeCookie, setCookie } from "typescript-cookie";
import client from "./client";

export default function setToken(token: string) {
  if (token) {
    setCookie("token", token, { expires: 7 });
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    removeCookie("token");
    delete client.defaults.headers.common.Authorization;
  }
}
