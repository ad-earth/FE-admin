import { putProducts } from "../../../../shared/apis/api";
import { useMutation } from "react-query";
import { useQueryClient } from "react-query";

const useSwitchQuery = () => {
  const queryClient = useQueryClient();
  const queryFn = async (no: number) => await putProducts(no);
  return useMutation((no: number) => queryFn(no), {
    onSuccess: () => {
      queryClient.invalidateQueries("setProdList");
    },
  });
};

export default useSwitchQuery;
