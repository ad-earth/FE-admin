import { putProducts } from "../../../../shared/apis/api";
import { useMutation } from "react-query";

const useSwitchQuery = () => {
  const queryFn = async (no: number) => await putProducts(no);
  return useMutation((no: number) => queryFn(no));
};

export default useSwitchQuery;
