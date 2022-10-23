import { getAdLevel } from "../../../shared/apis/api";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";

export function useAdLevel(p_No: number, keyword: string, k_Level: number) {
  const queryFn = async () => await getAdLevel(p_No, keyword, k_Level);

  return useQuery(
    ["keyword", { keyword: keyword, k_Level: k_Level }],
    queryFn,
    {
      enabled: !!keyword,
    }
  );
}
