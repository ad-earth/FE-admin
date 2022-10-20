import { KeyboardEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

import styles from "./loginContainer.module.scss";
import { LoginInput, PwdInput } from "../../../elements/inputs/Inputs";
import {
  LoginBlueButton,
  LoginJiguButton,
} from "../../../elements/buttons/Buttons";
import { useLoginReg } from "./useLoginReg";
import { postLogin } from "../../../shared/apis/api";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");

  // 기존 토큰 무효화
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  // 로그인 유효성 검사
  const validation = useLoginReg(id, pwd);

  // axios POST 로그인
  const { mutate, isError } = useMutation(() => postLogin(id, pwd), {
    onSuccess: (data) => {
      localStorage.setItem("token", data.data.token);
      navigate("/home");
    },
  });

  return (
    <>
      <div className={styles.inputWrapper}>
        <LoginInput
          placeholder="아이디"
          value={id}
          setInput={setId}
          onKeyDown={(e) => e.key === "Enter" && validation && mutate()}
        />
        <PwdInput
          placeholder="비밀번호"
          value={pwd}
          setInput={setPwd}
          onKeyDown={(e) => e.key === "Enter" && validation && mutate()}
        />
      </div>
      {!validation && (
        <p className={styles.errorMsg}>
          아이디와 비밀번호를 다시 확인해주세요.
        </p>
      )}
      {isError && <p className={styles.errorMsg}>가입한 회원이 아닙니다.</p>}
      <div className={styles.buttonWrapper}>
        <LoginBlueButton onClick={() => validation && mutate()}>
          로그인
        </LoginBlueButton>
        <LoginJiguButton />
      </div>
      <div className={`${styles.buttonWrapper} ${styles.row}`}>
        <button onClick={() => navigate("/signup")}>회원가입하기</button>|
        <button onClick={() => navigate("/find_account")}>
          아이디 비밀번호 찾기
        </button>
      </div>
    </>
  );
};

export default LoginContainer;
