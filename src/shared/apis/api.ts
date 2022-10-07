import axiosInstance from "./instance";

export const _postLogin = (id: string, pwd: string) =>
  axiosInstance.post(`/admins/login`, { a_Id: id, a_Pw: pwd });
