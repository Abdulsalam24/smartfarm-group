import { getPredictionApi, getYieldPredictionApi } from "@/api/prediction";
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

export const getYieldPredictionAction = async (
  yieldPrediction: any
): Promise<any> => {
  try {
    const { data } = await getYieldPredictionApi(yieldPrediction);
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
