import styles from "./loginContainer.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostLoginQuery } from "./usePostLoginQuery";
import { IdCheck, PwdCheck } from "../../../shared/hooks/useRegExp";
import { LoginInput, PwdInput } from "../../../elements/inputs/Inputs";
import {
  LoginBlueButton,
  LoginJiguButton,
} from "../../../elements/buttons/Buttons";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [id, setId] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const { mutate, isError } = usePostLoginQuery(id, pwd);

  const idCheck = IdCheck(id);
  const pwdCheck = PwdCheck(pwd);

  useEffect(() => {
    setIsValid(idCheck && pwdCheck);
  }, [idCheck, pwdCheck]);

  const handleLogin = () => {
    isValid ? mutate() : setIsValid(false);
  };

  return (
    <>
      <div className={styles.inputWrapper}>
        <LoginInput
          placeholder="아이디"
          value={id}
          setInput={setId}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />
        <PwdInput
          placeholder="비밀번호"
          value={pwd}
          setInput={setPwd}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />
      </div>
      {!isValid && (
        <p className={styles.errorMsg}>아이디와 비밀번호를 확인해주세요.</p>
      )}
      {isError ? (
        <p className={styles.errorMsg}>가입한 회원이 아닙니다.</p>
      ) : null}
      <div className={styles.buttonWrapper}>
        <LoginBlueButton onClick={() => handleLogin()}>로그인</LoginBlueButton>
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
