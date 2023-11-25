import client from "@/utils/client";

const BASE_URL = "https://smartfarm-production-b9d7.up.railway.app/api";
const getPredictionApi = async (): Promise<any> => {
  const url = new URL(`${BASE_URL}/prediction`);
  const res = client.get(url.toString());
  return res;
};

export { getPredictionApi };
