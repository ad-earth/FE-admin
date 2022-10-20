import { useQuery } from "react-query";
import { putPwd } from "../../../shared/apis/api";

export const useResetPwdQuery = (authNumber: number, newPwd: string) => {
  return useQuery("resetPwd", () => putPwd(authNumber, newPwd), {
    enabled: false,
  });
};
