import { getKeyword } from "../../../shared/apis/api";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { RankingType } from "./keywordRanking.type";

export default function useKeywordRankingQuery() {
  const queryFn = async () => await getKeyword();
  const { data } = useQuery<AxiosResponse<RankingType>, AxiosError>(
    "KeywordRanking",
    queryFn
  );
  return { data: data?.data.keywords };
}
