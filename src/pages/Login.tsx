import styles from "./styles/login.module.scss";
import LoginContainer from "../components/login/loginContainer/LoginContainer";
import logo from "../assets/logo/logo.svg";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loginWrapper}>
        <img src={logo} className={styles.logo} />
        <p className={styles.loginTitle}>사업자 로그인</p>
        <LoginContainer />
      </div>
    </div>
  );
};

export default Login;
