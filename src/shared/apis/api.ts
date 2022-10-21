import axiosInstance from "./instance";

// 로그인
export const postLogin = (id: string, pwd: string) =>
  axiosInstance.post(`/admins/login`, { a_Id: id, a_Pw: pwd });

// 아이디 찾기
export const getId = (brand: string, businessNumber: string) =>
  axiosInstance.get(
    `/admins/find-id?a_Brand=${brand}&a_Number=${businessNumber}`
  );

// 비밀번호 찾기 1차
export const getPwd = (id: string, businessNumber: string) =>
  axiosInstance.get(
    `/admins/find-password?a_Id=${id}&a_Number=${businessNumber}`
  );

// 비밀번호 재설정 2차
export const putPwd = (authNumber: number, newPwd: string) =>
  axiosInstance.put(`/admins/reset-password`, {
    a_Idx: authNumber,
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
  axiosInstance.get(`/admin-main/${queryFnName}`);
export const getKeyword = () =>
  axiosInstance.get(`/admin-main/popular-keywords`);
export const getAdSummary = () =>
  axiosInstance.get(`/admin-main/expense-reports`);
export const getBiz = () => axiosInstance.get(`/admin-main/charge`);
export const putBiz = () => axiosInstance.put(`/admin-main/charge`);
export const delUser = () => axiosInstance.delete(`/admins`);

//상품관리
export const getProducts = (category: string, page: number) =>
  axiosInstance.get(
    `/admin-products?p_Category=${category}&page=${page}&maxpost=10`
  );
export const delProducts = (item: number[]) =>
  axiosInstance.delete(`/admin-products`, { data: { p_No: item } });
export const putProducts = (p_No: number) =>
  axiosInstance.put(`/admin-products/status/${p_No}`);

// 배송관리 주문확정
export const putOrderConfirm = (
  confirmList: { o_No: number; p_No: number }[]
) =>
  axiosInstance.put(`/order-list`, {
    confirm: confirmList,
  });

// 배송관리 조회
export const getOrders = (
  page: string,
  postQty: string,
  date: string,
  product: string,
  status: string
) =>
  axiosInstance.get(
    `/order-list?page=${page}&maxpost=${postQty}&date=${date}&p_Name=${product}&o_Status=${status}`
  );

// 상품보고서 조회
export const getSalesReport = (category: string, date: string) =>
  axiosInstance.get(`/sales-report?p_Category=${category}&date=${date}`);

// 광고보고서 조회
export const getAdReport = (date: string, productNumber: string) =>
  axiosInstance.get(`/ad-report?date=${date}&p_No=${productNumber}`);

//광고관리
export const getAd = () => axiosInstance.get(`/admin-products/list`);
