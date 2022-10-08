import { idText } from "typescript";
import axiosInstance from "./instance";

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
