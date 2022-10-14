import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { postSingUp } from "../../shared/apis/api";
import { FormData, ErrType } from "./signUpForm.type";

export function useSignUp() {
  const queryFn = async (formData: FormData) =>
    await postSingUp(
      formData.id,
      formData.pwd,
      formData.brand,
      formData.buisness,
      formData.phone
    );
  return useMutation<AxiosResponse, AxiosError<ErrType>, any, unknown>(
    (formData: FormData) => queryFn(formData)
  );
}
