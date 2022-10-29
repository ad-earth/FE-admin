import { getAdSummary } from "../../../shared/apis/api";
import { useQuery } from "react-query";
import { AxiosResponse, AxiosError } from "axios";
import { SummaryType } from "./adSummary.type";

export default function useAdSummaryQuery() {
  const queryFn = async () => await getAdSummary();
  const { data } = useQuery<AxiosResponse<SummaryType>, AxiosError>(
    "adSummary",
    queryFn
  );
  return { summaryRes: data?.data.data };
}
