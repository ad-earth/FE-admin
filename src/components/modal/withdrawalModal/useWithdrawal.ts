import { delUser } from "../../../shared/apis/api";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

export interface ErrType {
  errorMessage: string;
}
export function useWithdrawal() {
  const queryFn = async () => await delUser();

  return useMutation<any, AxiosError<ErrType>>(queryFn);
}
