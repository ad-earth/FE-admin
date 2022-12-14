import styles from "./findIdForm.module.scss";
import { useState } from "react";
import { useGetIdQuery } from "./useGetIdQuery";
import { LoginInput } from "../../../elements/inputs/Inputs";
import { LoginBlueButton } from "../../../elements/buttons/Buttons";

const FindIdForm = () => {
  const [brand, setBrand] = useState<string>("");
  const [businessNumber, setBusinessNumber] = useState<string>("");

  const { data, refetch, isSuccess, isError } = useGetIdQuery(
    brand,
    businessNumber
  );

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <LoginInput
          placeholder="상호명"
          setInput={setBrand}
          onKeyDown={(e) => e.key === "Enter" && refetch()}
        />
        <LoginInput
          placeholder="사업자 번호 예) 1234567890"
          setInput={setBusinessNumber}
          onKeyDown={(e) => e.key === "Enter" && refetch()}
        />
      </div>
      {isSuccess && (
        <p className={`${styles.msg}`}>
          회원님의 아이디는 {data?.data.a_Id} 입니다.
        </p>
      )}
      {isError && (
        <p className={`${styles.msg} ${styles.error}`}>
          존재하지 않는 회원입니다. 다시 확인해주세요.
        </p>
      )}
      <div className={styles.buttonWrapper}>
        <LoginBlueButton
          onClick={() => {
            refetch();
          }}
        >
          아이디 찾기
        </LoginBlueButton>
      </div>
    </div>
  );
};

export default FindIdForm;
