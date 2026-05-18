import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://rd-pl-api-walter-berrios.onrender.com",
  headers: {
    "Content-Type": "application/json"
  }
});

export default apiClient;