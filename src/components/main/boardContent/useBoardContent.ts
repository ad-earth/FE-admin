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
      queryKey: "exposedProd",
      queryFn: () => queryFn("on-products"),
    },
    {
      queryKey: "lastMonth",
      queryFn: () => queryFn("last-sales"),
    },
  ]);
  return res?.map((lists) => lists?.data?.data);
};
export default useBoardContent;
