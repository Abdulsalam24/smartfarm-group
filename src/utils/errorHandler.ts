import { toaster } from "@/helpers/handle-toast";
// @ts-ignore

import { removeCookie } from "typescript-cookie";

export const handleError = (error: any) => {

  const errorMessage = error?.response?.data?.message;
  
  
  if (errorMessage === "Unauthorized") {
    removeCookie("token");
    return "/";
  }
  
  if (error.message && errorMessage == undefined) {
    return error.message;
  }

  if (Array.isArray(errorMessage)) {
    if (errorMessage.length > 0) {
      toaster(errorMessage[0], "error");
    }
  } else {
    const msg = error.response.data.message;
    let redirect;
    if (msg.includes("verified")) {
      toaster(errorMessage, "error");
      return (redirect = "/auth/verify-user");
    }

    toaster(errorMessage, "error");
    return errorMessage;
  }
};
