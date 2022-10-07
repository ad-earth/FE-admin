import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./loginContainer.module.scss";
import logo from "../../../assets/logo/logo.svg";
import LoginInput from "../../../elements/inputs/Inputs";
import {
  LoginBlueButton,
  LoginJiguButton,
} from "../../../elements/buttons/Buttons";
import { useLoginReg } from "./useLoginReg";
import { postLogin } from "./postLogin";

const LoginContainer = () => {
  useEffect(() => {
    localStorage.removeItem("token");
  }, []);
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [validation, setValidation] = useState(0);

  const loginResponse = useLoginReg(id, pwd);
  const token = localStorage.getItem("token");
  function handleLogin() {
    if (loginResponse) {
      // 클라이언트에서 선 유효성 검사 후, 통과하면 서버 요청
      postLogin(id, pwd);
      token && navigate(`/home`);
      !token && setValidation(2);
    } else {
      // 입력 값 올바르지 않을 경우, 에러메시지 처리
      setValidation(1);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginWrapper}>
        <img src={logo} className={styles.logo} />
        <p className={styles.loginTitle}>사업자 로그인</p>
        <div className={styles.inputWrapper}>
          <LoginInput placeholder="아이디" type="text" setId={setId} />
          <LoginInput placeholder="비밀번호" type="password" setPwd={setPwd} />
        </div>
        {validation === 1 && (
          <p className={styles.errorMsg}>
            아이디 비밀번호를 다시 확인해주세요.
          </p>
        )}
        {validation === 2 && (
          <p className={styles.errorMsg}>가입한 회원이 아닙니다.</p>
        )}
        <div className={styles.buttonWrapper}>
          <LoginBlueButton onClick={() => handleLogin()}>
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
      </div>
    </div>
  );
};

export default LoginContainer;
