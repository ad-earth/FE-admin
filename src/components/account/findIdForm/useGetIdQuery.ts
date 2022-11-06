import { useQuery } from "react-query";
import { getId } from "../../../shared/apis/api";

export const useGetIdQuery = (brand: string, businessNumber: string) => {
  return useQuery("findId", () => getId(brand, businessNumber), {
    enabled: false,
  });
};
