import SignUpForm from "../components/signUp/SignUpForm";
import logo from "../assets/logo/logo.svg";

const SignUp = () => {
  return (
    <section id="signUp" style={styles.signUp}>
      <img src={logo} alt="logo" />
      <span style={styles.title}>사업자 회원가입</span>
      <SignUpForm />
    </section>
  );
};

const styles = {
  signUp: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,
  title: {
    margin: "25px 0 42px 0",
    fontSize: "24px",
  } as React.CSSProperties,
};
export default SignUp;
