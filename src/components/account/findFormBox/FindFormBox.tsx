import styles from "./findFormBox.module.scss";
import { useState } from "react";
import FindForm from "../findForm/FindForm";

const FindFormBox = () => {
  const [isId, setIsId] = useState<boolean>(true);

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabWrapper}>
        <div className={styles.tabs} onClick={() => setIsId(true)}>
          {isId ? (
            <div className={`${styles.tab} ${styles.active}`}>아이디 찾기</div>
          ) : (
            <div className={styles.tab}>아이디 찾기</div>
          )}
        </div>
        <div className={styles.tabs} onClick={() => setIsId(false)}>
          {isId ? (
            <div className={styles.tab}>비밀번호 찾기</div>
          ) : (
            <div className={`${styles.tab} ${styles.active}`}>
              비밀번호 찾기
            </div>
          )}
        </div>
      </div>
      <div className={styles.formWrapper}>
        <FindForm isId={isId} />
      </div>
    </div>
  );
};

export default FindFormBox;
