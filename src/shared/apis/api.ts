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

//회원가입
export const postSingUp = (
  a_Id: string,
  a_Pw: string,
  a_Brand: string,
  a_Number: string,
  a_Phone: string
) =>
  axiosInstance.post(`/admins/register`, {
    a_Id,
    a_Pw,
    a_Brand,
    a_Number,
    a_Phone,
  });

//메인
export const getBords = (queryFnName: string) =>
  axiosInstance.get(`/${queryFnName}`);
//   axiosInstance.get(`/admin-main/${queryFnName}`);
export const getKeyword = () => axiosInstance.get(`/popular-keywords`);
// axiosInstance.get(`/admin-main/popular-keywords`);
export const getAdSummary = () => axiosInstance.get(`/expense-reports`);
// axiosInstance.get(`/admin-main/expense-reports`);

//상품관리
export const getProducts = (category: string, page: number) =>
  axiosInstance.get(
    `/admin-products?p_Category=${category}&page=${page}&maxpost=10`
  );
// axiosInstance.get(`/admin-products?p_Category=”욕실”&page=1&maxpost=10`);
export const delProducts = (item: number[]) =>
  axiosInstance.delete(`/admin-products`, { data: { p_No: item } });
export const putProducts = (p_No: number) =>
  axiosInstance.put(`/admin-products/status/${p_No}`);

// test
export const test = (p_Content: string) =>
  axiosInstance.put(`/admin-products/content/1665346898889`, { p_Content });
