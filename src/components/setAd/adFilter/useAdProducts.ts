import { getAd } from "../../../shared/apis/api";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface Product {
  p_No: number;
  p_Name: string;
}

export interface ResType {
  productList: Product[];
}

export function useAdProducts() {
  const fetchProd = async () => await getAd();
  return useQuery<AxiosResponse<ResType>, AxiosError>("adProducts", () =>
    fetchProd()
  );
}
