import { useQuery } from "react-query";
import { getAdReport } from "../../../shared/apis/api";

export const useAdQuery = (date: string, productNumber: string) => {
  return useQuery(
    ["sales", { date: date, productNumber: productNumber }],
    () => getAdReport(date, productNumber),
    {
      enabled: !!date || !!productNumber,
    }
  );
};
