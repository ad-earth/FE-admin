import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import styles from "./findIdForm.module.scss";
import { LoginBlueButton } from "../../../elements/buttons/Buttons";
import { LoginInput } from "../../../elements/inputs/Inputs";
import { getId } from "./getId";

const FindIdForm = () => {
  const [shop, setShop] = useState("");
  const [bNo, setBNo] = useState("");
  const [isData, setIsData] = useState(0);
  useEffect(() => {
    setIsData(0);
  }, []);
  const { data, refetch } = useQuery("id", () => getId(shop, bNo), {
    enabled: false,
    onSuccess: () => setIsData(1),
    onError: () => setIsData(2),
  });

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <LoginInput placeholder="상호명" setInput={setShop} />
        <LoginInput
          placeholder="사업자 번호 예) 1234567890"
          setInput={setBNo}
        />
      </div>
      {isData === 1 && (
        <p className={`${styles.msg}`}>회원님의 아이디는 {data.a_Id} 입니다.</p>
      )}
      {isData === 2 && (
        <p className={`${styles.msg} ${styles.error}`}>
          존재하지 않는 회원입니다. 다시 확인해주세요.
        </p>
      )}
      <div className={styles.buttonWrapper}>
        <LoginBlueButton onClick={() => refetch()}>아이디 찾기</LoginBlueButton>
      </div>
    </div>
  );
};

export default FindIdForm;
