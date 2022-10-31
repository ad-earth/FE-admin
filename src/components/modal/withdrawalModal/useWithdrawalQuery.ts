import { delUser } from "../../../shared/apis/api";
import { useMutation } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { ErrType } from "./withdrawalModal.type";

export function useWithdrawalQuery() {
  const queryFn = async () => await delUser();
  return useMutation<AxiosResponse, AxiosError<ErrType>>(queryFn);
}
