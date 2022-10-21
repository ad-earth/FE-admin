import { useQuery } from "react-query";
import { getSalesReport } from "../../../shared/apis/api";

export const useProductQuery = (date: string) => {
  return useQuery(["sales"], () => getSalesReport(null, date));
};
