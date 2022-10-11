import { useQueries } from "react-query";
import { getBords } from "../../../shared/apis/api";

const queryFn = async (heroId: string) => await getBords(heroId);
const useBoardContent = () => {
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
  return res?.map((lists) => lists?.data?.data);
};
export default useBoardContent;
