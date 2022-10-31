import { useMutation, useQuery } from "react-query";
import {
  delProd,
  editProd,
  getProdInfo,
  postProd,
} from "../../../shared/apis/api";
import { AxiosResponse, AxiosError } from "axios";
import { useSetRecoilState } from "recoil";
import { optListState } from "../../../store/option";
import { DataType, DataEditType, OptListType, ErrType } from "./postForm.type";

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
  const queryFn = async (bodyData: DataEditType) =>
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
    (bodyData: DataEditType) => queryFn(bodyData),
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
export const useGetProdInfo = (p_No: number) => {
  const setList = useSetRecoilState(optListState);
  const queryFn = async () => await getProdInfo(p_No);
  return useQuery("prodInfo", queryFn, {
    enabled: !!p_No,
    onSuccess: ({ data }) => {
      let option = data.p_Option;
      let optionList = option.map((item: OptListType, i: number) => ({
        id: i + 1,
        colorCheck: item.color ? true : false,
        optCheck: item.option ? true : false,
        color: item.color,
        colorCode: item.colorCode,
        option: item.option,
        optionPrice: item.optionPrice,
        optionCnt: item.optionCnt,
      }));
      setList(optionList);
    },
  });
};
