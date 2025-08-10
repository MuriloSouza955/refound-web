import axios from "axios";

const LOCAL_STORAGE_KEY = "@refund";

export const api = axios.create({
  baseURL: "http://localhost:3333/"
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(`${LOCAL_STORAGE_KEY}:token`);
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});