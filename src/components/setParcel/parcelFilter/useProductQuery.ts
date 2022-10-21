import { useQuery } from "react-query";
import { getAd } from "../../../shared/apis/api";

export const useProductQuery = () => {
  const { data } = useQuery("products", () => getAd());
  let productList: string[] = [];
  data?.data.productList.map(({ p_Name }: { p_No: number; p_Name: string }) => {
    productList.push(p_Name);
  });
  return productList;
};
