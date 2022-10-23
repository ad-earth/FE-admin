import { useQuery } from "react-query";
import { getSalesReport } from "../../../shared/apis/api";

export const useSalesQuery = (category: string, date: string) => {
  return useQuery(
    ["sales", { category: category, date: date }],
    () => getSalesReport(category, date),
    { enabled: !!category || !!date }
  );
};
