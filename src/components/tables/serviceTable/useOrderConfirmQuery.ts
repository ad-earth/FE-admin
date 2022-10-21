import { useMutation } from "react-query";
import { putOrderConfirm } from "../../../shared/apis/api";

// 주문 확정
export const useOrderConfirmQuery = (
  confirmList: { o_No: number; p_No: number }[]
) =>
  useMutation(() => putOrderConfirm(confirmList), {
    onSuccess: () => {},
    onError: () => {},
  });
