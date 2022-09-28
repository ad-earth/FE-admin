import { useState } from "react";
import FindForm from "../findForm/FindForm";
import "./_findFormBox.style.scss";

const FindFormBox = () => {
  const [idActive, setIdActive] = useState(true);
  return (
    <div className="tabContainer">
      <div className="tabWrapper">
        <div className="tabs" onClick={() => setIdActive(true)}>
          {idActive ? (
            <div className="tab active">아이디 찾기</div>
          ) : (
            <div className="tab">아이디 찾기</div>
          )}
        </div>
        <div className="tabs" onClick={() => setIdActive(false)}>
          {idActive ? (
            <div className="tab">비밀번호 찾기</div>
          ) : (
            <div className="tab active">비밀번호 찾기</div>
          )}
        </div>
      </div>
      <div className="formWrapper">
        <FindForm idActive={idActive} />
      </div>
    </div>
  );
};

export default FindFormBox;
