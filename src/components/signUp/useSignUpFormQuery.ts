import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { postSingUp } from "../../shared/apis/api";
import { FormDataType, ErrType } from "./signUpForm.type";

export function useSignUpQuery() {
  const queryFn = async (formData: FormDataType) =>
    await postSingUp(
      formData.id,
      formData.pwd,
      formData.brand,
      formData.buisness,
      formData.phone
    );
  return useMutation<AxiosResponse, AxiosError<ErrType>, any, unknown>(
    (formData: FormDataType) => queryFn(formData)
  );
}
