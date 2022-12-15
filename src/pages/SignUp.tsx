import styles from "./styles/signUp.module.scss";
import SignUpForm from "../components/signUp/SignUpForm";
import logo from "../assets/logo/logo.svg";

const SignUp = () => {
  return (
    <section className={styles.signUp}>
      <img src={logo} alt="logo" />
      <span className={styles.title}>사업자 회원가입</span>
      <SignUpForm />
    </section>
  );
};

export default SignUp;
