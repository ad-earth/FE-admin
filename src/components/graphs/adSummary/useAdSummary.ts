import { getAdSummary } from "../../../shared/apis/api";
import { useQuery } from "react-query";

export default function useAdSummary() {
  const queryFn = async () => await getAdSummary();
  const { data } = useQuery("adSummary", queryFn);
  return data?.data.data;
}
