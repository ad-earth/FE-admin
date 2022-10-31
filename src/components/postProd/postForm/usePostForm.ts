import { useMutation, useQuery } from "react-query";
import {
  delProd,
  editProd,
  // getProdDetail,
  postProd,
} from "../../../shared/apis/api";
import { AxiosResponse, AxiosError } from "axios";
import { useRecoilState } from "recoil";
import { optListState } from "../../../store/option";

interface ErrType {
  message: string;
}
interface DataType {
  p_No: number;
  p_Category: string;
  p_Thumbnail: string[];
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: [
    {
      color: string | null;
      colorCode: string | null;
      option: string | null;
      optionPrice: number | null;
      optionCnt: number | null;
    }
  ];
  p_Desc: string;
  p_Content: string;
}
//상품 등록
export function usePostProd() {
  const queryFn = async (bodyData: DataType) =>
    await postProd(
      bodyData.p_Category,
      bodyData.p_Thumbnail,
      bodyData.p_Name,
      bodyData.p_Cost,
      bodyData.p_Sale,
      bodyData.p_Discount,
      bodyData.p_Option,
      bodyData.p_Desc,
      bodyData.p_Content
    );
  return useMutation<AxiosResponse, AxiosError<ErrType>, any, unknown>(
    (bodyData: DataType) => queryFn(bodyData),
    {}
  );
}
//상품 수정
export function useEditProd() {
  const queryFn = async (bodyData: DataType) =>
    await editProd(
      bodyData.p_No,
      bodyData.p_Category,
      bodyData.p_Thumbnail,
      bodyData.p_Name,
      bodyData.p_Cost,
      bodyData.p_Sale,
      bodyData.p_Discount,
      bodyData.p_Option,
      bodyData.p_Desc,
      bodyData.p_Content
    );
  return useMutation<AxiosResponse, AxiosError<ErrType>, any, unknown>(
    (bodyData: DataType) => queryFn(bodyData),
    {}
  );
}
//상품 삭제
const DelProd = async (p_No: number[]) => {
  return await delProd(p_No);
};
export const useDeleteProd = () => {
  return useMutation((p_No: number[]) => DelProd(p_No));
};
// 상품 정보 패칭

// export function useGetProdDetail(p_No: number) {
//   const queryFn = async () => await getProdDetail(p_No);
//   return useQuery("p", queryFn, { enabled: !!p_No });
// }
