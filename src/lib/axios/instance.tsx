import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_URL_BACKEND,
  headers: {
    Authorization: `Bearer ${process.env.BASE_API_BACKEND}`,
    "Content-Type": "application/json",
  },
});

export default instance;
