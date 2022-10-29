import { delAdProd } from "../../../shared/apis/api";
import { useMutation, useQueryClient } from "react-query";

export const useDelAdProdQuery = (p_No: number) => {
  const queryClient = useQueryClient();
  const delProd = async (k_No: number[]) => await delAdProd(p_No, k_No);
  return useMutation((k_No: number[]) => delProd(k_No), {
    onSuccess: () => {
      queryClient.invalidateQueries(["setAdTable", p_No]);
    },
  });
};
