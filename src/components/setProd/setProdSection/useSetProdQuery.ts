import { getProducts } from "../../../shared/apis/api";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { ResType } from "./setProdSection.type";

export const fetchProd = async (category: string, page: number) =>
  await getProducts(category, page);

export function useSetProdQuery(category: string, page: number) {
  return useQuery<AxiosResponse<ResType>, AxiosError>(
    ["setProdList", { category: category, page: page }],
    () => fetchProd(category, page),
    {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
      enabled: !!page,
    }
  );
}
