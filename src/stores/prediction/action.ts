import { getPredictionApi } from "@/api/prediction";
import { toaster } from "@/helpers/handle-toast";
import { handleError } from "@/utils/errorHandler";

export const getPredictionAction = async (): Promise<any> => {
  try {
    const { data } = await getPredictionApi();
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
