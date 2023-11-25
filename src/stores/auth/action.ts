import { loginApi, registerApi } from "@/api/auth";
import { toaster } from "@/helpers/handle-toast";
import { handleError } from "@/utils/errorHandler";
import setToken from "@/utils/setToken";
import { setLoginUser } from "@/utils/setUser";

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
