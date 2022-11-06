import { useMutation, useQueryClient } from "react-query";
import { putOrderConfirm } from "../../../shared/apis/api";

export const usePutConfirmQuery = (
  confirmList: { o_No: number; p_No: number }[]
) => {
  const queryClient = useQueryClient();
  return useMutation(() => putOrderConfirm(confirmList), {
    onSuccess: () => {
      queryClient.invalidateQueries("orderList");
    },
  });
};
