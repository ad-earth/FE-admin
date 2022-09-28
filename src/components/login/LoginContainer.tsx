import { useNavigate } from "react-router-dom";
import "./_login.style.scss";
import logo from "../../assets/logo/logo.svg";
import LoginInput from "../../elements/inputs/Inputs";

const LoginContainer = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="loginWrapper">
        <img src={logo} className="logo" />
        <p className="loginTitle">사업자 로그인</p>
        <div className="inputWrapper">
          <LoginInput placeholder="아이디" type="text" />
          <LoginInput placeholder="비밀번호" type="password" />
        </div>
        <p className="errorMsg">아이디 비밀번호를 다시 확인해주세요</p>
        {/* 추후 공통 버튼 엘리먼트로 변경 필요 */}
        <div className="buttonWrapper">
          <button>로그인</button>
          <button onClick={() => window.open("https://www.adearth.shop/")}>
            지구샵 바로가기
          </button>
        </div>
        <div className="buttonWrapper row">
          <button onClick={() => navigate("/signup")}>회원가입하기</button>|
          <button onClick={() => navigate("/find-account")}>
            아이디 비밀번호 찾기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
