import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../../shared/apis/api";

export const usePostLoginQuery = (id: string, pwd: string) => {
  const navigate = useNavigate();
  return useMutation(() => postLogin(id, pwd), {
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      navigate("/home");
    },
  });
};
