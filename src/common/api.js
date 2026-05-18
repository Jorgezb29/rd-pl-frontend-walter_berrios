import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "https://rd-pl-api-walter-berrios.onrender.com"
  }
});

export default apiClient;