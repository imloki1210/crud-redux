import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "https://your-api.com";

// attach token from cookies
const getAuthHeader = () => ({
  headers: { Authorization: `Bearer ${Cookies.get("token")}` },
});

export const fetchItems = () => axios.get(`${API_URL}/items`, getAuthHeader());
export const addItem = (data) =>
  axios.post(`${API_URL}/items`, data, getAuthHeader());
export const updateItem = (id, data) =>
  axios.put(`${API_URL}/items/${id}`, data, getAuthHeader());
export const deleteItem = (id) =>
  axios.delete(`${API_URL}/items/${id}`, getAuthHeader());
