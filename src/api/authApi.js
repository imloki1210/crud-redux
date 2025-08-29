import axios from "axios";

const API_URL = "https://your-api.com";

export const loginApi = async (email, password) => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  return res.data;
};
