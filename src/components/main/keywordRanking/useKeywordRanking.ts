import { getKeyword } from "../../../shared/apis/api";
import { useQuery } from "react-query";

export default function useKeywordRanking() {
  const queryFn = async () => await getKeyword();
  const { data } = useQuery("KeywordRanking", queryFn);
  return data?.data.keywords;
}
