import client from "@/utils/client";

const BASE_URL = "https://smartfarm-production-b9d7.up.railway.app/api";

const getProfileApi = async (): Promise<any> => {
  const url = new URL(`${BASE_URL}/auth/user-profile`);
  const res = client.get(url.toString());
  return res;
};

const loginApi = async (loginValue: any): Promise<any> => {
  const url = new URL(`${BASE_URL}/auth/login`);
  const res = client.post(url.toString(), loginValue);
  return res;
};

const registerApi = async (registerInfo: any): Promise<any> => {
  const url = new URL(`${BASE_URL}/auth/signup`);
  const res = client.post(url.toString(), registerInfo);
  return res;
};

const forgotPasswordApi = async (forgotPasswordInfo: any): Promise<any> => {
  const url = new URL(`${BASE_URL}/auth/forgot-password`);
  console.log(forgotPasswordInfo, "forgotPasswordInfo");
  
  url.searchParams.set("email", forgotPasswordInfo.email);
  const res = client.post(url.toString());
  return res;
};

const resetPasswordApi = async (resetPasswordInfo: any): Promise<any> => {
  const url = new URL(`${BASE_URL}/auth/change-password`);
  const res = client.post(url.toString(), resetPasswordInfo);
  return res;
};



const verfiyOtpApi = async (otp: any): Promise<any> => {
  const url = new URL(`${BASE_URL}/auth/verify-OTP`);
  const res = client.post(url.toString(), otp);
  return res;
};

export {
  loginApi,
  registerApi,
  forgotPasswordApi,
  resetPasswordApi,
  verfiyOtpApi,
  getProfileApi,
};
