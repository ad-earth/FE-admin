import { useQuery } from "react-query";
import { getAdReport } from "../../../shared/apis/api";
import { AxiosResponse } from "axios";
import { AdResponseType } from "./adContainer.type";

export const useGetAdQuery = (date: string, productNumber: string) => {
  return useQuery<AxiosResponse<AdResponseType>, Error>(
    ["sales", { date: date, productNumber: productNumber }],
    () => getAdReport(date, productNumber),
    {
      enabled: !!date || !!productNumber,
    }
  );
};
