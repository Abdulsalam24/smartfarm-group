import { toaster } from "@/helpers/handle-toast";
// @ts-ignore

import { removeCookie } from "typescript-cookie";

export const handleError = (error: any) => {
  const errorData = error?.response?.data?.data;
  const errorMessage = error?.response?.data?.message;

  const values = errorData && Object?.values(errorData);

  if (values?.length > 0) {
    const firstErrorValue = values[0];
    toaster(`${firstErrorValue}`, "error");
    return;
  }

  if (errorMessage !== "") {
    toaster(errorMessage, "error");
    return "/";
  }
  if (errorMessage === "Unauthorized") {
    removeCookie("token");
    return "/";
  }

  if (errorData.length > 0) {
    toaster(errorData[0], "error");
  }

  if (error?.response.data.data === null) {
    console.log(
      error?.response?.data?.message,
      "error?.response?.data?.message"
    );
    toaster(error?.response?.data?.message, "error");
  }

  // if (error.message && errorData == undefined) {
  //   return error.message;
  // }

  // if (Array.isArray(errorData)) {
  //   if (errorData.length > 0) {
  //     toaster(errorData[0], "error");
  //   }
  // } else {
  //   const msg = error.response.data.message;
  //   let redirect;
  //   if (msg.includes("verified")) {
  //     toaster(errorData, "error");
  //     return (redirect = "/auth/verify-user");
  //   }
  //   console.log("firstfirstfirstfirstfirstfirst");
  //   toaster(errorData, "error");
  //   return errorData;
  // }
};
