import { getWeatherApi } from "@/api/weather";
import { toaster } from "@/helpers/handle-toast";
import { handleError } from "@/utils/errorHandler";

export const getWeatherAction = async (location :any): Promise<any> => {
  try {
    const { data } = await getWeatherApi(location);
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
