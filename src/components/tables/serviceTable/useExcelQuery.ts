import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { OrdersResponseType } from "./serviceTable.type";
import { getOrders } from "../../../shared/apis/api";

export const useExcelQuery = (
  date: string,
  product: string,
  status: string
) => {
  return useQuery<AxiosResponse<OrdersResponseType>, Error>(
    [
      "excel",
      {
        date: date,
        product: product,
        status: status,
      },
    ],
    () => getOrders(0, "0", date, product, status)
  );
};
