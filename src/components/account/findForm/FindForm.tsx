import { useNavigate } from "react-router-dom";

import LoginInput from "../../../elements/inputs/Inputs";
import { PropsType } from "./findForm.type";
import "./_findForm.style.scss";

const FindForm = (props: PropsType) => {
  const navigate = useNavigate();
  return (
    <div className="formContainer">
      {props.idActive ? (
        <div className="inputWrapper">
          <LoginInput placeholder="상호명" type="text" />
          <LoginInput placeholder="사업자 번호 예) 123-456-7890" type="text" />
        </div>
      ) : (
        <div className="inputWrapper">
          <LoginInput placeholder="아이디" type="text" />
          <LoginInput placeholder="사업자 번호 예) 123-456-7890" type="text" />
        </div>
      )}
      <p className="errorMsg">존재하지 않는 회원입니다. 다시 확인해주세요.</p>
      <div className="buttonWrapper">
        {/* 공통 버튼으로 변경 필요 */}
        <button>아이디 찾기</button>
        <div className="buttonWrapper row">
          <button onClick={() => navigate("/")}>로그인</button>|
          <button onClick={() => navigate("/signup")}>회원 가입</button>
        </div>
      </div>
    </div>
  );
};

export default FindForm;
