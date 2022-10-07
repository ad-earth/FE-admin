import axios from "axios";

import { _postLogin } from "../../../shared/apis/api";

export async function postLogin(id: string, pwd: string) {
  await _postLogin(id, pwd)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    })
    .catch((error) => {
      console.log(axios.isAxiosError(error));
    });
}
