import { TOKEN_KEY } from "@/utils/constants";
import axios, { AxiosResponse, AxiosError } from "axios";

const BASE_URL =
  import.meta.env.VITE_ENVIRONMENT === "production"
    ? import.meta.env.VITE_API_BASE_URL_PRODUCTION ?? ""
    : import.meta.env.VITE_API_BASE_URL_DEVELOPMENT ?? "";

const token = localStorage.getItem(TOKEN_KEY);

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

export function setAuthHeader(token: string) {
  client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const onSuccess = (response: AxiosResponse) => {
  console.debug("✅ Request Successful:", response);
  return response.data;
};

const onError = async (error: AxiosError) => {
  console.error("❌ Request Failed:", error.config);

  if (error.response) {
    const { status, data, headers } = error.response;
    console.error("Status:", status);
    console.error("Data:", data);
    console.error("Headers:", headers);

    if (status === 401) {
      localStorage.removeItem(TOKEN_KEY);
      window.location.reload();
    }
  } else {
    console.error("Error Message:", error.message);
  }

  return Promise.reject(error);
};

client.interceptors.response.use(onSuccess, onError);

export default client;
