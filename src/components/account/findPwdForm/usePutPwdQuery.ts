import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { putPwd } from "../../../shared/apis/api";

export const usePutPwdQuery = (authNumber: number, newPwd: string) => {
  return useQuery<AxiosResponse<{ success: boolean }>, Error>(
    "resetPwd",
    () => putPwd(authNumber, newPwd),
    {
      enabled: false,
    }
  );
};
