import client from "@/utils/client";

const BASE_URL = "https://smartfarm-production-b9d7.up.railway.app/api";

const getWeatherApi = async (location: any): Promise<any> => {
  const url = new URL(`${BASE_URL}/weather/details`);
  console.log(location, "location");
  url.searchParams.set("location", location);
  const res = client.get(url.toString());
  return res;
};

export { getWeatherApi };
