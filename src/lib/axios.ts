import type { AxiosInstance, CreateAxiosDefaults } from "axios";
import axios from "axios";

const axiosConfig: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const axiosInstance: AxiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.response.use((response) => response);
