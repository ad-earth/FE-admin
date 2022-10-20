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

// 배송관리 주문확정
export const putOrderConfirm = (orderNumber: number, productNumber: number) =>
  axiosInstance.put(`/order-list`, {
    confirm: [
      {
        o_No: orderNumber,
        p_No: productNumber,
      },
    ],
  });
// 배송관리 조회
export const getOrders = (
  page: string,
  postQty: string,
  date: string,
  product: string,
  status: "신규주문" | "배송완료" | "주문취소"
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
