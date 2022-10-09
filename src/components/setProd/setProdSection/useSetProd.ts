import { getProducts } from "../../../shared/apis/api";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";

export const fetchProd = async (category: string, page: number) =>
  await getProducts(category, page);

export function useSetProd(category: string, page: number) {
  return useQuery(
    ["setProdList", { category: category, page: page }],
    () => fetchProd(category, page),
    {
      keepPreviousData: true,
      staleTime: 3000,
      refetchOnWindowFocus: true,
      enabled: !!page,
    }
  );
}
