import { getBiz, putBiz } from "../../../shared/apis/api";
import { useQuery, useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { BizMoneyType } from "./bizMomey.type";

//비즈머니 금액 요청
export const useGetBizQuery = () => {
  const queryFn = async () => await getBiz();
  return useQuery<AxiosResponse<BizMoneyType>, AxiosError>("bizMoney", queryFn);
};

// 비즈머니 금액 충전
export const usePutBizQuery = () => {
  const queryClient = useQueryClient();
  const queryFn = async () => await putBiz();
  return useMutation<AxiosResponse, AxiosError>("bizMoney", queryFn, {
    onSuccess: () => {
      queryClient.invalidateQueries("bizMoney");
    },
  });
};
