import { postAdProd, putAdProd } from "../../../shared/apis/api";
import { useMutation } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { ErrType, ProdAdType } from "./postAdModal.type";
import { useQueryClient } from "react-query";

//광고 추가
export function usePostAdQuery() {
  const queryClient = useQueryClient();
  const queryFn = async (bodyData: ProdAdType) =>
    await postAdProd(
      bodyData.pNo,
      bodyData.keyword,
      bodyData.level,
      bodyData.cost,
      bodyData.adStatus
    );
  return useMutation<AxiosResponse, AxiosError<ErrType>, any, unknown>(
    (bodyData: ProdAdType) => queryFn(bodyData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("setAdTable");
      },
    }
  );
}
//광고 수정
export function usePutAdQuery() {
  const queryClient = useQueryClient();
  const queryFn = async (bodyData: ProdAdType) =>
    await putAdProd(
      bodyData.pNo,
      bodyData.keyword,
      bodyData.level,
      bodyData.cost,
      bodyData.adStatus
    );
  return useMutation<AxiosResponse, AxiosError<ErrType>, any, unknown>(
    (bodyData: ProdAdType) => queryFn(bodyData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("setAdTable");
      },
    }
  );
}
