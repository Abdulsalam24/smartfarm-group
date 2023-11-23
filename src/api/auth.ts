import client from "@/utils/client";

// const { BASE_URL } = config;

const BASE_URL = "https://smartfarm-production-b9d7.up.railway.app/api";

 const loginApi = async (loginValue: any): Promise<any> => {
  const url = new URL(`${BASE_URL}/auth/login`);
  const res = client.post(url.toString(), loginValue);
  return res;
};

const registerApi = async (registerInfo:any): Promise<any> => {
  const url = new URL(
    `https://smartfarm-production-b9d7.up.railway.app/api/auth/signup`
  );
  const res = client.post(url.toString(), registerInfo);
  return res;
};

export {
  loginApi,
  registerApi,
};
