import axiosInstance from "./instance";
import { FormData } from "../../components/signUp/signUpForm.type";

//회원가입
export const postSingUp = ({ id, pwd, brand, buisness, phone }: FormData) =>
  axiosInstance.post(`/admins/register`, { id, pwd, brand, buisness, phone });

//메인
export const getBords = (queryFnName: string) =>
  axiosInstance.get(`/${queryFnName}`);
//   axiosInstance.get(`/admin-main/${queryFnName}`);
export const getKeyword = () => axiosInstance.get(`/popular-keywords`);
// axiosInstance.get(`/admin-main/popular-keywords`);
export const getAdSummary = () => axiosInstance.get(`/expense-reports`);
// axiosInstance.get(`/admin-main/expense-reports`);
