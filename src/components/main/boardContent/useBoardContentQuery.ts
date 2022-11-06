import { useQueries } from "react-query";
import { getBords } from "../../../shared/apis/api";
import { BoardType } from "./boardContent.type";

const queryFn = async (heroId: string) => await getBords(heroId);
const useBoardContentQuery = () => {
  const res = useQueries([
    {
      queryKey: "newOrder",
      queryFn: () => queryFn("new-orders"),
    },
    {
      queryKey: "lastMonth",
      queryFn: () => queryFn("last-sales"),
    },
    {
      queryKey: "exposedProd",
      queryFn: () => queryFn("on-products"),
    },
  ]);
  return { data: res?.map((lists: BoardType) => lists?.data?.data) };
};
export default useBoardContentQuery;
