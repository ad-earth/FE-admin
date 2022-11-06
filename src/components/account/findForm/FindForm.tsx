import styles from "./findForm.module.scss";
import { useNavigate } from "react-router-dom";
import { PropsType } from "./findForm.type";
import FindIdForm from "../findIdForm/FindIdForm";
import FindPwdForm from "../findPwdForm/FindPwdForm";

const FindForm = (props: PropsType) => {
  const navigate = useNavigate();

  return (
    <div className={styles.formContainer}>
      {props.isId ? <FindIdForm /> : <FindPwdForm />}
      <div className={`${styles.buttonWrapper}`}>
        <button onClick={() => navigate("/")}>로그인</button>|
        <button onClick={() => navigate("/signup")}>회원 가입</button>
      </div>
    </div>
  );
};

export default FindForm;
