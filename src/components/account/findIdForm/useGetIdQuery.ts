import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { IdResponseType } from "./findIdForm.type";
import { getId } from "../../../shared/apis/api";

export const useGetIdQuery = (brand: string, businessNumber: string) => {
  return useQuery<AxiosResponse<IdResponseType>, Error>(
    "findId",
    () => getId(brand, businessNumber),
    {
      enabled: false,
    }
  );
};
