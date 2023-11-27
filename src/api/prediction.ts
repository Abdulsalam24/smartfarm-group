import client from "@/utils/client";

const BASE_URL = "https://smartfarm-production-b9d7.up.railway.app/api";

const getPredictionApi = async (): Promise<any> => {
  const url = new URL(`${BASE_URL}/prediction`);
  const res = client.get(url.toString());
  return res;
};

const cropTrackingApi = async (plantTracking: any): Promise<any> => {
  const url = new URL(`${BASE_URL}/plant`);
  const res = client.post(url.toString(), plantTracking);
  return res;
};

const getCropTrackingApi = async (): Promise<any> => {
  const url = new URL(`${BASE_URL}/plant`);
  const res = client.get(url.toString());
  return res;
};

const getYieldPredictionApi = async ({
  ph,
  location,
  label,
  water_availability,
}: any): Promise<any> => {
  const url = new URL(`${BASE_URL}/prediction/yield-prediction`);

  url.searchParams.set("ph", ph);
  url.searchParams.set("location", location);
  url.searchParams.set("label", label);
  url.searchParams.set("water_availability", water_availability);

  const res = client.get(url.toString());
  return res;
};

export {
  getPredictionApi,
  getYieldPredictionApi,
  getCropTrackingApi,
  cropTrackingApi,
};
