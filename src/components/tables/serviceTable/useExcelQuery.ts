import { useQuery } from "react-query";
import { getOrders } from "../../../shared/apis/api";

export const useExcelQuery = (
  page: string,
  postQty: string,
  date: string,
  product: string,
  status: string
) => {
  return useQuery(
    [
      "excel",
      {
        page: page,
        postQty: postQty,
        date: date,
        product: product,
        status: status,
      },
    ],
    () => getOrders(page, postQty, date, product, status)
  );
};
