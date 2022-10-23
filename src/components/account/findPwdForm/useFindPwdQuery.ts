import { useQuery } from "react-query";
import { getPwd } from "../../../shared/apis/api";

export const useFindPwdQuery = (id: string, businessNumber: string) => {
  return useQuery("findPwd", () => getPwd(id, businessNumber), {
    enabled: false,
  });
};
