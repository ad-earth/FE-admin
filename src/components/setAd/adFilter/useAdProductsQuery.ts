import { getAd } from "../../../shared/apis/api";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { ResType } from "./adFilter.type";

export function useAdProductsQuery() {
  const fetchProd = async () => await getAd();
  return useQuery<AxiosResponse<ResType>, AxiosError>("adProducts", fetchProd, {
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000,
  });
}
