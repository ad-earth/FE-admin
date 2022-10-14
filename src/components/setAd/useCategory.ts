import { getAd } from "../../shared/apis/api";
import { useQuery } from "react-query";

export function useCategory() {
  const fetchProd = async () => await getAd();
  return useQuery("adCategory", () => fetchProd());
}
