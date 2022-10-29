import { getAdProd } from "../../../shared/apis/api";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { AdTableListType } from "./setAdSection.type";

export function useAdProdQuery(filterData: number) {
  const fetchProd = async () => await getAdProd(filterData);
  return useQuery<AxiosResponse<AdTableListType>, AxiosError>(
    ["setAdTable", filterData],
    fetchProd,
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
      enabled: !!filterData,
    }
  );
}
