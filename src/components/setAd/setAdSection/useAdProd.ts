import { getAdProd } from "../../../shared/apis/api";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";

export interface ProductList {
  id: number;
  k_No: number;
  keyword: string;
  k_Level: number;
  k_Cost: number;
  k_Click: number;
  clickCost: number;
  k_Status: boolean;
}

interface ResType {
  cnt: number;
  keywordList: ProductList[];
}

export function useAdProd(filterData: number) {
  const fetchProd = async () => await getAdProd(filterData);
  return useQuery<AxiosResponse<ResType>, AxiosError>(
    ["setAdTable", filterData],
    fetchProd,
    {
      enabled: !!filterData,
    }
  );
}
