import { _getPwd } from "../../../shared/apis/api";

export async function getPwd(id: string, bNo: string) {
  const { data } = await _getPwd(id, bNo);
  return data;
}
