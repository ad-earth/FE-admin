import { delProducts } from "../../../shared/apis/api";
import { useMutation } from "react-query";
interface Data {
  p_No: number[];
}
const delProduct = async (p_No: number[]) => {
  const res = await delProducts(p_No);
  return res;
};
const useDelProd = () => {
  return useMutation((p_No: number[]) => delProduct(p_No), {});
};

export default useDelProd;

const useCancelDetail = (data: Data) => {};
