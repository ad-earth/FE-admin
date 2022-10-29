import { getAdLevel } from "../../../shared/apis/api";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { LevelCost } from './postAdModal.type';

//키워드 순위별 입찰금액 요청 
export function useAdLevelQuery(p_No: number, keyword: string, k_Level: number) {
  const queryFn = async () => await getAdLevel(p_No, keyword, k_Level);
  return useQuery<AxiosResponse<LevelCost>, AxiosError>(
    ["keyword", { keyword: keyword, k_Level: k_Level }],
    queryFn,
    { enabled: !!keyword }
  );
}
