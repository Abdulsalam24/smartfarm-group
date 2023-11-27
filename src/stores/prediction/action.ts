import {
  cropTrackingApi,
  getCropTrackingApi,
  getPredictionApi,
  getYieldPredictionApi,
} from "@/api/prediction";
import { toaster } from "@/helpers/handle-toast";
import { handleError } from "@/utils/errorHandler";

export const getPredictionAction = async (): Promise<any> => {
  try {
    const { data } = await getPredictionApi();
    // toaster(data.d)
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

export const getYieldPredictionAction = async (
  yieldPrediction: any
): Promise<any> => {
  try {
    const { data } = await getYieldPredictionApi(yieldPrediction);
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

export const cropTrackingAction = async (plantTracking : any): Promise<any> => {
  try {
    const { data } = await cropTrackingApi(plantTracking);
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



export const getCropTrackingAction = async (): Promise<any> => {
  try {
    const { data } = await getCropTrackingApi();
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

