import { useQuery } from "react-query";
import { getPwd } from "../../../shared/apis/api";

export const useGetPwdQuery = (id: string, businessNumber: string) => {
  return useQuery("findPwd", () => getPwd(id, businessNumber), {
    enabled: false,
  });
};
