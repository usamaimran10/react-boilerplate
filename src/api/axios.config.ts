import axios, { AxiosResponse, AxiosError } from "axios";

const client = axios.create({
  baseURL: "https://icanhazdadjoke.com",
});

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

    // if (status === 401) {
    //   localStorage.removeItem(TOKEN_KEY);
    //   window.location.reload();
    // }
  } else {
    console.error("Error Message:", error.message);
  }

  return Promise.reject(error);
};

client.interceptors.response.use(onSuccess, onError);

export default client;
