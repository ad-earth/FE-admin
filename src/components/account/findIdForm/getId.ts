import { _getId } from "../../../shared/apis/api";

export async function getId(shop: string, bNo: string) {
  const { data } = await _getId(shop, bNo);
  return data;
}
