import { idText } from "typescript";
import axiosInstance from "./instance";
import { FormData } from "../../components/signUp/signUpForm.type";

// 로그인
export const _postLogin = (id: string, pwd: string) =>
  axiosInstance.post(`/admins/login`, { a_Id: id, a_Pw: pwd });
// 아이디 찾기
export const _getId = (shop: string, buisnessNo: string) =>
  axiosInstance.get(`/admins/find-id`, {
    params: {
      a_Brand: shop,
      a_Number: buisnessNo,
    },
  });
// 비밀번호 찾기 1차
export const _getPwd = (id: string, buisnessNo: string) =>
  axiosInstance.get(`/admins/find-password`, {
    params: {
      a_Id: id,
      a_Number: buisnessNo,
    },
  });
// 비밀번호 재설정 2차
export const _putPwd = (id: number, newPwd: string) =>
  axiosInstance.put(`/admins/reset-password`, {
    a_Idx: id,
    a_Pw: newPwd,
  });

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

