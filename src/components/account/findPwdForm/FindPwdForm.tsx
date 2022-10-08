import { useState } from "react";
import { useQuery } from "react-query";

import { LoginBlueButton } from "../../../elements/buttons/Buttons";
import { LoginInput, PwdInput } from "../../../elements/inputs/Inputs";
import styles from "./findPwdForm.module.scss";
import { getPwd } from "./getPwd";
import { putPwd } from "./putPwd";

const FindPwdForm = () => {
  const [id, setId] = useState("");
  const [bNo, setBNo] = useState("");
  const [newPwd, SetNewPwd] = useState("");
  const [reset, setReset] = useState(0);
  const [isChanged, setIsChanged] = useState(0);

  // 비밀번호 찾기 (1차)
  const { data, refetch: pwdRefetch } = useQuery("id", () => getPwd(id, bNo), {
    enabled: false,
    onSuccess: () => {
      setReset(1);
    },
    onError: () => setReset(2),
  });
  // 비밀번호 재설정 (2차)
  const { refetch: newPwdRefetch } = useQuery(
    "pwd",
    () => putPwd(data.a_Idx, newPwd),
    {
      enabled: false,
      onSuccess: () => setIsChanged(1),
      onError: () => {
        setIsChanged(2);
      },
    }
  );
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        {reset === 1 && (
          <PwdInput placeholder="새로운 비밀번호" setInput={SetNewPwd} />
        )}
        {(reset === 0 || reset === 2) && (
          <>
            <LoginInput placeholder="아이디" type="text" setInput={setId} />
            <LoginInput
              placeholder="사업자 번호 예) 1234567890"
              type="text"
              setInput={setBNo}
            />
          </>
        )}
      </div>

      {reset === 1 && isChanged === 0 && (
        <p className={`${styles.msg}`}>새로운 비밀번호를 입력해주세요.</p>
      )}
      {reset === 2 && isChanged === 0 && (
        <p className={`${styles.msg} ${styles.error}`}>
          존재하지 않는 회원입니다. 다시 확인해주세요.
        </p>
      )}
      {isChanged === 1 && (
        <p className={`${styles.msg}`}>비밀번호가 변경되었습니다.</p>
      )}
      {isChanged === 2 && (
        <p className={`${styles.msg} ${styles.error}`}>
          올바른 비밀번호 형식이 아닙니다. 다시 입력해주세요.
        </p>
      )}
      <div className={styles.buttonWrapper}>
        {reset === 1 && (
          <LoginBlueButton onClick={() => newPwdRefetch()}>
            비밀번호 재설정
          </LoginBlueButton>
        )}
        {(reset === 0 || reset === 2) && (
          <LoginBlueButton onClick={() => pwdRefetch()}>
            비밀번호 찾기
          </LoginBlueButton>
        )}
      </div>
    </div>
  );
};

export default FindPwdForm;
