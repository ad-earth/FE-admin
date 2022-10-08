import { useState } from "react";
import FindForm from "../findForm/FindForm";
import styles from "./findFormBox.module.scss";

const FindFormBox = () => {
  const [idActive, setIdActive] = useState(true);
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabWrapper}>
        <div className={styles.tabs} onClick={() => setIdActive(true)}>
          {idActive ? (
            <div className={`${styles.tab} ${styles.active}`}>아이디 찾기</div>
          ) : (
            <div className={styles.tab}>아이디 찾기</div>
          )}
        </div>
        <div className={styles.tabs} onClick={() => setIdActive(false)}>
          {idActive ? (
            <div className={styles.tab}>비밀번호 찾기</div>
          ) : (
            <div className={`${styles.tab} ${styles.active}`}>
              비밀번호 찾기
            </div>
          )}
        </div>
      </div>
      <div className={styles.formWrapper}>
        <FindForm idActive={idActive} />
      </div>
    </div>
  );
};

export default FindFormBox;
