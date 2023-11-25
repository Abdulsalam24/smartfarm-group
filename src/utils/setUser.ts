import { getCookie, setCookie } from "typescript-cookie";

export const setLoginUser = (user: any) => {
  setCookie("user", JSON.stringify(user), {
    expires: 7,
  });
};

export const getLoginUser = () => {
  getCookie("user") ? JSON.parse(getCookie("user")!) : {};
};

export const clearLoginUser = () => {
  setCookie("user", JSON.stringify({}), { expires: 7 });
};
