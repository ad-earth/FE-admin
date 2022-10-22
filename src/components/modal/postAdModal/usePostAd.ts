import { postAdProd, putAdProd } from "../../../shared/apis/api";
import { useMutation } from "react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface ErrType {
  errorMessage: string;
}
interface ProdAdType {
  pNo: number;
  keyword: string;
  level: number;
  cost: number;
  adStatus: boolean;
}

//광고 추가
export function usePostAd() {
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
    {}
  );
}
//광고 수정
export function usePutAd() {
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
    {}
  );
}
