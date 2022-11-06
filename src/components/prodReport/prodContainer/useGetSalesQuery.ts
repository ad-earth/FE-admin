import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { SalesResponseType } from "./prodContainer.type";
import { getSalesReport } from "../../../shared/apis/api";

export const useGetSalesQuery = (category: string, date: string) => {
  return useQuery<AxiosResponse<SalesResponseType>, Error>(
    ["sales", { category: category, date: date }],
    () => getSalesReport(category, date),
    { enabled: !!category || !!date }
  );
};
