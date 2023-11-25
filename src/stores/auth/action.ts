import {
  forgotPasswordApi,
  getProfileApi,
  loginApi,
  registerApi,
  verfiyOtpApi,
} from "@/api/auth";
import { toaster } from "@/helpers/handle-toast";
import { handleError } from "@/utils/errorHandler";
import setToken from "@/utils/setToken";
import { setLoginUser } from "@/utils/setUser";

export const getProfileAction = async (): Promise<any> => {
  try {
    const { data } = await getProfileApi();
    return {
      success: true,
      data: data.data,
    };
  } catch (error) {
    return {
      success: false,
      redirect: handleError(error),
    };
  }
};

export const registerAction = async (registerInfo: any): Promise<any> => {
  try {
    const { data } = await registerApi(registerInfo);
    toaster(data.message, "success");
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      redirect: handleError(error),
    };
  }
};

export const loginAction = async (loginInfo: any): Promise<any> => {
  try {
    const { data } = await loginApi(loginInfo);
    console.log(data, "datatata");
    toaster(data.message, "success");
    setToken(data.data.accessToken);
    setLoginUser(data.data.fullname);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      redirect: handleError(error),
    };
  }
};

export const resetPasswordAction = async (
  resetPasswordInfo: any
): Promise<any> => {
  try {
    const { data } = await resetPasswordAction(resetPasswordInfo);
    toaster(data.message, "success");
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      redirect: handleError(error),
    };
  }
};

export const forgotPasswordAction = async (
  forgotPasswordInfo: any
): Promise<any> => {
  try {
    const { data } = await forgotPasswordApi(forgotPasswordInfo);
    toaster(data.message, "success");
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      redirect: handleError(error),
    };
  }
};

export const verfiyOtpAction = async (otp: any): Promise<any> => {
  try {
    const { data } = await verfiyOtpApi(otp);
    toaster(data.message, "success");
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      redirect: handleError(error),
    };
  }
};
