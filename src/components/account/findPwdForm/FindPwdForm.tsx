import styles from "./findPwdForm.module.scss";
import { useMemo, useState } from "react";
import { useGetPwdQuery } from "./useGetPwdQuery";
import { usePutPwdQuery } from "./usePutPwdQuery";
import { LoginInput, PwdInput } from "../../../elements/inputs/Inputs";
import { LoginBlueButton } from "../../../elements/buttons/Buttons";

const FindPwdForm = () => {
  const [id, setId] = useState<string>("");
  const [businessNumber, setBusinessNumber] = useState<string>("");
  const [newPwd, setNewPwd] = useState<string>("");

  const pwdQuery = useGetPwdQuery(id, businessNumber);
  const { authNumber } = useMemo(
    () => ({ authNumber: pwdQuery.data?.data.a_Idx }),
    [pwdQuery]
  );

  const resetQuery = usePutPwdQuery(authNumber, newPwd);

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        {pwdQuery.isSuccess ? (
          <PwdInput placeholder="새로운 비밀번호" setInput={setNewPwd} />
        ) : (
          <>
            <LoginInput
              placeholder="아이디"
              type="text"
              setInput={setId}
              onKeyDown={(e) => e.key === "Enter" && pwdQuery.refetch()}
            />
            <LoginInput
              placeholder="사업자 번호 예) 1234567890"
              type="text"
              setInput={setBusinessNumber}
              onKeyDown={(e) => e.key === "Enter" && pwdQuery.refetch()}
            />
          </>
        )}
      </div>
      {pwdQuery.isSuccess && (
        <p className={`${styles.msg}`}>새로운 비밀번호를 입력해주세요.</p>
      )}
      {pwdQuery.isError && (
        <p className={`${styles.msg} ${styles.error}`}>
          존재하지 않는 회원입니다. 다시 확인해주세요.
        </p>
      )}
      {resetQuery.isSuccess && (
        <p className={`${styles.msg}`}>비밀번호가 변경되었습니다.</p>
      )}
      {resetQuery.isError && (
        <p className={`${styles.msg} ${styles.error}`}>
          올바른 비밀번호 형식이 아닙니다. 다시 입력해주세요.
        </p>
      )}
      <div className={styles.buttonWrapper}>
        {pwdQuery.isSuccess ? (
          <LoginBlueButton onClick={() => resetQuery.refetch()}>
            비밀번호 재설정
          </LoginBlueButton>
        ) : (
          <LoginBlueButton onClick={() => pwdQuery.refetch()}>
            비밀번호 찾기
          </LoginBlueButton>
        )}
      </div>
    </div>
  );
};

export default FindPwdForm;
