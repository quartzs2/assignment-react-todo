import ky from "ky";
import { API_BASE_URL, ENDPOINTS } from "../constants/urls";

export const getAdvice = async () => {
  const data = await ky.get(`${API_BASE_URL}/${ENDPOINTS.ADVICE}`).json();

  return data;
};
