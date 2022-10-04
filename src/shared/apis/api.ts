import axiosInstance from "./instance";
import { FormData } from "../../components/signUp/signUpForm.type";

export const getTest = () => axiosInstance.get("");

//회원가입
export const postSingUp = ({ id, pwd, brand, buisness, phone }: FormData) =>
  axiosInstance.post(`/admins/register`, { id, pwd, brand, buisness, phone });
