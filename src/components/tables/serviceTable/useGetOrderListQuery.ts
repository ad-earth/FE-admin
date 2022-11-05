import { useQuery } from "react-query";
import { getOrders } from "../../../shared/apis/api";

export const useGetOrderListQuery = (
  page: number,
  date: string,
  product: string,
  status: string
) => {
  return useQuery(
    ["orderList", { page: page, date: date, product: product, status: status }],
    () => getOrders(page, "10", date, product, status)
  );
};
