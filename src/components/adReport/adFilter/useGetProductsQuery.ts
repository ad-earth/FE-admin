import { useQuery } from "react-query";
import { getAd } from "../../../shared/apis/api";

export const useGetProductsQuery = () => {
  const { data } = useQuery("productNumbers", () => getAd());
  let numberList: string[] = [];
  data?.data.productList.map(({ p_No }: { p_No: number; p_Name: string }) => {
    numberList.push(String(p_No));
  });
  return numberList;
};
