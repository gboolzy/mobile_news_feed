import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://newsapi.org/v2",
  timeout: 15000,
});

export default api;
