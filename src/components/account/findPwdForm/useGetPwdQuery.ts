import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { PwdResponseType } from "./findPwdForm.type";
import { getPwd } from "../../../shared/apis/api";

export const useGetPwdQuery = (id: string, businessNumber: string) => {
  return useQuery<AxiosResponse<PwdResponseType>, Error>(
    "findPwd",
    () => getPwd(id, businessNumber),
    {
      enabled: false,
    }
  );
};
