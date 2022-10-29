import styles from "./signUpForm.module.scss";
import { useEffect, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useInputReducer } from "./useInputReducer";
import { useSignUpQuery } from "./useSignUpFormQuery";
import { FormDataType } from "./signUpForm.type";
import { SingUpPwdInput, SingUpInput } from "../../elements/inputs/Inputs";
import { SignUpBlueButton } from "../../elements/buttons/Buttons";
import { initialValue } from "./initialValue";

const SignUpForm = () => {
  const navigate = useNavigate();
  // userInput Data
  const [state, setDispatch] = useReducer(useInputReducer, initialValue);
  const { id, pwd, pCheck, brand, buisness, phone } = state;
  //post form data
  const [formData, setFormData] = useState<FormDataType>();
  // 회원가입 hook
  const { mutate } = useSignUpQuery();
  //실시간 유효성 검사  (dispatch)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDispatch({ type: e.target.name, payload: e.target.value });

  useEffect(() => {
    if (!state) return;
    setFormData({
      id: id.val,
      pwd: pwd.val,
      brand: brand.val,
      buisness: buisness.val,
      phone: phone.val,
    });
  }, [id.val, pwd.val, brand.val, buisness.val, phone.val]);

  // //버튼 비활성 조건
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        navigate("/");
        setDispatch({ type: "reset" });
      },
      //회원가입 err errorMessage ,에러 핸들링
      onError: (error) => {
        const errMsg = error.response.data.errorMessage;
        if (errMsg === "중복된 연락처입니다.") {
          setDispatch({ type: "phone", payload: "err" });
        } else if (errMsg === "중복된 아이디입니다.") {
          setDispatch({ type: "id", payload: "err" });
        } else if (errMsg === "중복된 사업자번호입니다.") {
          setDispatch({ type: "buisness", payload: "err" });
        } else return;
      },
    });
  };

  return (
    <form id={styles.signUpForm} onSubmit={handleSubmit}>
      {/* 아이디 */}
      <SingUpInput
        type="text"
        placeholder="아이디 (영문,숫자 5~10자)"
        value={id.val}
        name="id"
        onChange={onChange}
      />
      <span
        className={`${id.isCheck ? `${styles.success}` : `${styles.error}`}`}
      >
        {id.msg}
      </span>
      {/* 비밀번호 */}
      <SingUpPwdInput
        placeholder="비밀번호 (영문,숫자,특수문자 포함(8~20자)"
        value={pwd.val}
        name="pwd"
        onChange={onChange}
      />
      <span
        className={`${pwd.isCheck ? `${styles.success}` : `${styles.error}`}`}
      >
        {pwd.msg}
      </span>
      {/* 비밀번호 확인 */}
      <SingUpPwdInput
        // type="password"
        placeholder="비밀번호 확인"
        value={pCheck.val}
        name="pCheck"
        onChange={onChange}
      />
      <span
        className={`${
          pCheck.isCheck ? `${styles.success}` : `${styles.error}`
        }`}
      >
        {pCheck.msg}
      </span>

      {/* 상호명 */}
      <SingUpInput
        placeholder="상호명"
        value={brand.val}
        name="brand"
        onChange={onChange}
      />
      {/* 사업자 번호 */}
      <SingUpInput
        placeholder="사업자 번호  예) 0201021928"
        value={buisness.val}
        name="buisness"
        onChange={onChange}
      />
      <span
        className={`${
          buisness.isCheck ? `${styles.success}` : `${styles.error}`
        }`}
      >
        {buisness.msg}
      </span>

      {/* 연락처 */}
      <input
        type="tel"
        placeholder="연락처  예) 010-0000-0000"
        value={phone.val}
        name="phone"
        onChange={onChange}
      />
      <span
        className={`${phone.isCheck ? `${styles.success}` : `${styles.error}`}`}
      >
        {phone.msg}
      </span>
      <SignUpBlueButton
        type="submit"
        value="회원가입"
        text="회원가입"
        disabled={
          !(
            id.isCheck &&
            pwd.isCheck &&
            pCheck.isCheck &&
            brand.isCheck &&
            buisness.isCheck &&
            phone.isCheck
          )
        }
      />
      <Find />
    </form>
  );
};

function Find() {
  const navigate = useNavigate();
  return (
    <p className={styles.findeWrap}>
      이미 계정이 있으신가요?
      <span onClick={() => navigate("/")}>로그인</span>
    </p>
  );
}

export default SignUpForm;
