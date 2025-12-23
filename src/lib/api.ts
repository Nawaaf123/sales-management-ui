import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7058", // your .NET API
  headers: {
    "Content-Type": "application/json",
  },
});

// TEMP: mock role until real auth
api.interceptors.request.use((config) => {
  config.headers["X-ROLE"] = "admin"; // change to "salesman" to test
  return config;
});

export default api;
