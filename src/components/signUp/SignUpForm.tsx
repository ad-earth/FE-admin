import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signUpForm.module.scss";
import useInput from "./useInput";
import useSignUpForm from "./useSignUpForm";
import { StateType, FormData } from "./signUpForm.type";

const SignUpForm = () => {
  const navigate = useNavigate();
  const mutation = useSignUpForm();
  //실시간 유효성 검사 hook
  const [state, onChange] = useInput();
  const [{ id, pwd, pCheck, brand, buisness, phone }, setData] =
    useState<StateType>(state);
  const [formData, setFormData] = useState<FormData>();

  useEffect(() => {
    state &&
      setFormData({
        id: id.val,
        pwd: pwd.val,
        brand: brand.val,
        buisness: buisness.val,
        phone: phone.val,
      });
  }, [id.val, pwd.val, brand.val, buisness.val, phone.val]);

  useEffect(() => {
    state && setData(state);
  }, [state]);
  console.log(state);

  // //버튼 비활성 조건
  // const disabled = ;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert("데이터 넘기기");
    console.log(formData);
    mutation.mutate(formData, {
      onSuccess: () => {
        navigate({
          pathname: "/",
        });
      },
      onError: () => {
        console.log("onError");
      },
    });
  };

  return (
    <form id={styles.signUpForm} onSubmit={handleSubmit}>
      {/* 아이디 */}
      <input
        type="text"
        placeholder="아이디 (5~10자)"
        value={id.val}
        name="id"
        onChange={onChange}
      />
      <span
        className={`${id.isCheck ? `${styles.success}` : `${styles.error}`}`}
      >
        {id.msg}
      </span>
      <>
        {/* 비밀번호 */}
        <input
          type="password"
          placeholder="비밀번호 (영문,숫자,특수문자 포함(8~20자)"
          value={pwd.val}
          autoComplete="false"
          name="pwd"
          onChange={onChange}
        />
        <span
          className={`${pwd.isCheck ? `${styles.success}` : `${styles.error}`}`}
        >
          {pwd.msg}
        </span>
        {/* 비밀번호 확인 */}
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={pCheck.val}
          autoComplete="false"
          name="pwdCheck"
          onChange={onChange}
        />
        <span
          className={`${
            pCheck.isCheck ? `${styles.success}` : `${styles.error}`
          }`}
        >
          {pCheck.msg}
        </span>
      </>
      <br />
      <>
        {/* 상호명 */}
        <input
          type="text"
          placeholder="상호명"
          value={brand.val}
          name="brand"
          onChange={onChange}
        />
        {/* 사업자 번호 */}
        <input
          type="text"
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
      </>
      {/* 연락처 */}
      <input
        type="tel"
        placeholder="연락처  예) 0100000000"
        value={phone.val}
        name="phone"
        onChange={onChange}
      />
      <span
        className={`${phone.isCheck ? `${styles.success}` : `${styles.error}`}`}
      >
        {phone.msg}
      </span>
      <input
        type="submit"
        value="회원가입"
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
      ></input>
      <Find />
    </form>
  );
};

function Find() {
  const navigate = useNavigate();
  return (
    <p className={styles.findeWrap}>
      이미 계정이 있으신가요?
      <span onClick={() => navigate(`/`)}>로그인</span>
    </p>
  );
}

export default SignUpForm;
