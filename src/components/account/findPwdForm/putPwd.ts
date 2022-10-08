import { _putPwd } from "../../../shared/apis/api";

export async function putPwd(id: number, newPwd: string) {
  const { data } = await _putPwd(id, newPwd);
  return data;
}
