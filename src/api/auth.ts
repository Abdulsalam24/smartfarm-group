import client from "@/utils/client";

// const { BASE_URL } = config;

const BASE_URL = "http:localhost:9090/api";

 const loginApi = async (loginValue: any): Promise<any> => {
  const url = new URL(`${BASE_URL}/auth/login`);
  const res = client.post(url.toString(), loginValue);
  return res;
};

const registerApi = async (registerInfo:any): Promise<any> => {
  const url = new URL(`http://localhost:9090/api/auth/signup`);
  const res = client.post(url.toString(), registerInfo);
  return res;
};

export {
  loginApi,
  registerApi,
};
