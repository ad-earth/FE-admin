import { postSingUp } from "../../shared/apis/api";
// import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { FormData } from "./signUpForm.type";

export default function useSignUp() {
  // const navigate = useNavigate();
  const queryFn = async (formData: FormData) => await postSingUp(formData);
  return useMutation((formData: FormData) => queryFn(formData), {
    // onSuccess: () => {
    //   navigate({
    //     pathname: "/",
    //   });
    // },
    onError: () => {},
  });
}
