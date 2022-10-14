import { getBiz, putBiz } from "../../../shared/apis/api";
import { useQuery, useMutation } from "react-query";
import { useQueryClient } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { BizType } from "./bizMomey.type";

export const useGetBiz = () => {
  const queryFn = async () => await getBiz();
  return useQuery<AxiosResponse<BizType>, AxiosError>("bizMoney", queryFn);
};

export const usePutBiz = () => {
  const queryClient = useQueryClient();
  const queryFn = async () => await putBiz();
  return useMutation<AxiosResponse, AxiosError>("bizMoney", queryFn, {
    onSuccess: () => {
      queryClient.invalidateQueries("bizMoney");
    },
  });
};
