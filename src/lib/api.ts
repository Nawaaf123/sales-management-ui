import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7058", // your .NET API
  headers: {
    "Content-Type": "application/json",
  },
});

// OPTIONAL: set role for now (mock auth)
api.interceptors.request.use((config) => {
  config.headers["X-ROLE"] = "admin"; // or "salesman"
  return config;
});

export default api;
