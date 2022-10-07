import { useNavigate } from "react-router-dom";

import styles from "./loginContainer.module.scss";
import logo from "../../../assets/logo/logo.svg";
import LoginInput from "../../../elements/inputs/Inputs";
import {
  LoginBlueButton,
  LoginJiguButton,
} from "../../../elements/buttons/Buttons";

const LoginContainer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.loginWrapper}>
        <img src={logo} className={styles.logo} />
        <p className={styles.loginTitle}>사업자 로그인</p>
        <div className={styles.inputWrapper}>
          <LoginInput placeholder="아이디" type="text" />
          <LoginInput placeholder="비밀번호" type="password" />
        </div>
        <p className={styles.errorMsg}>아이디 비밀번호를 다시 확인해주세요.</p>
        <div className={styles.buttonWrapper}>
          <LoginBlueButton>로그인</LoginBlueButton>
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
