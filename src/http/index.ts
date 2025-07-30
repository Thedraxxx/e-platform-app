import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.1.122:8000/api/v2/",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// 🔐 Add interceptor to attach token automatically
API.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
