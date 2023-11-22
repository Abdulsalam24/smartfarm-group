import { registerApi } from "@/api/auth";
import { toaster } from "@/helpers/handle-toast";
import { handleError } from "@/utils/errorHandler";

export const registerAction = async (registerInfo: any): Promise<any> => {
  try {
    const { data } = await registerApi(registerInfo);
    toaster(data.description, "success");

    let redirect = "/auth/verify-user";

    return {
      success: true,
      redirect,
    };
  } catch (error) {
    return {
      success: false,
      redirect: handleError(error),
    };
  }
};
