import FindFormBox from "../components/account/findFormBox/FindFormBox";
import logo from "../assets/logo/logo.svg";
import styles from "./styles/account.module.scss";

const Account = () => {
  return (
    <div className={styles.container}>
      <div className={styles.accountWrapper}>
        <img src={logo} className={styles.logo} />
        <FindFormBox />
      </div>
    </div>
  );
};

export default Account;
