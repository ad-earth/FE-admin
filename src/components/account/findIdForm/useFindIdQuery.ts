import { useQuery } from "react-query";
import { getId } from "../../../shared/apis/api";

export const useFindIdQuery = (brand: string, businessNumber: string) => {
  return useQuery("findId", () => getId(brand, businessNumber), {
    enabled: false,
  });
};
