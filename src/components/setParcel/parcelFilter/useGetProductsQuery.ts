import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { ProductsResponseType } from "./parcelFilter.type";
import { getAd } from "../../../shared/apis/api";

export const useGetProductsQuery = () => {
  const { data } = useQuery<AxiosResponse<ProductsResponseType>, Error>(
    "products",
    () => getAd()
  );
  let productList: string[] = [];
  data?.data.productList.map(({ p_Name }: { p_No: number; p_Name: string }) =>
    productList.push(p_Name)
  );
  if (productList[0] !== "전체") {
    productList.unshift("전체");
  }
  return productList;
};
