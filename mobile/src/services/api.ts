import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { AuthData } from "../contexts/authContext";

export const api = axios.create({
  baseURL: "http://10.10.10.12:3333",
});

api.interceptors.request.use(
  async (config) => {
    if (config.headers) {
      const data = await AsyncStorage.getItem("@AuthData");

      if (data) {
        const { token } = JSON.parse(data) as AuthData;
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
