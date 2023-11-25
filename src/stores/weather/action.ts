import { getWeatherApi } from "@/api/weather";
import { toaster } from "@/helpers/handle-toast";
import { handleError } from "@/utils/errorHandler";

export const getWeatherAction = async (location: any): Promise<any> => {
  try {
    const { data } = await getWeatherApi(location);
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      redirect: handleError(error),
    };
  }
};
