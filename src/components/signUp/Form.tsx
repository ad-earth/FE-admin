import { useState, useCallback } from "react";
import "./form.style.scss";
import { InputType, UserType, IsSignUpType } from "./form.type";
import { IdCheck, PwdCheck, BuisnessCheck, PhoneCheck } from "./regExp";

const Form = () => {
  // input value
  const [user, setUser] = useState<UserType>({
    id: "",
    pwd: "",
    pwdCheck: "",
    brand: "",
    buisness: "",
    phone: null,
  });
  // input 메세지
  const [msg, setMsg] = useState<InputType>({
    id: "",
    pwd: "",
    pwdCheck: "",
    buisness: "",
    phone: "",
  });
  // 유효성 검사
  const [isSignUp, setIsSignUp] = useState<IsSignUpType>({
    id: false,
    pwd: false,
    pwdCheck: false,
    brand: false,
    buisness: false,
    phone: false,
  });

  //유효성 검사
  const onChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
      switch (name) {
        case "id": //아이디 확인
          if (IdCheck(value)) {
            setMsg({ ...msg, id: "안전한 아이디 입니다." });
            setIsSignUp({ ...isSignUp, id: true });
          } else {
            setMsg({ ...msg, id: "8자리 이상 입력해주세요" });
            setIsSignUp({ ...isSignUp, id: false });
          }
          break;
        case "pwd": //비밀번호 확인
          if (PwdCheck(value)) {
            setMsg({
              ...msg,
              pwd: "사용가능한 비밀번호 입니다.",
              pwdCheck: "",
            });
            setIsSignUp({ ...isSignUp, pwd: true });
          } else {
            setMsg({ ...msg, pwd: "8자리 이상 입력해주세요", pwdCheck: "" });
            setIsSignUp({ ...isSignUp, pwd: false, pwdCheck: false });
          }
          break;
        case "pwdCheck": //비밀번호 체크
          if (user.pwd === value) {
            setMsg({ ...msg, pwdCheck: "비밀번호 일치 " });
            setIsSignUp({ ...isSignUp, pwdCheck: true });
          } else {
            setMsg({ ...msg, pwdCheck: "비밀번호를 다시 확인해주세요." });
            setIsSignUp({ ...isSignUp, pwdCheck: false });
          }
          break;
        case "brand": //브랜드 이름 1단어 이상
          if (user.brand.length > 0) {
            setIsSignUp({ ...isSignUp, brand: true });
          } else {
            setIsSignUp({ ...isSignUp, brand: false });
          }
          break;
        case "buisness": //사업자명 확인
          if (BuisnessCheck(value)) {
            setIsSignUp({ ...isSignUp, buisness: true });
          } else {
            setIsSignUp({ ...isSignUp, buisness: false });
          }
          break;
        case "phone": //사업자명 확인
          if (PhoneCheck(value)) {
            setMsg({ ...msg, phone: "올바른 연락처 입니다." });
            setIsSignUp({ ...isSignUp, phone: true });
          } else {
            setMsg({ ...msg, phone: "연락처를 다시 확인해주세요" });
            setIsSignUp({ ...isSignUp, phone: false });
          }
          break;
        default:
      }
    },
    []
  );
  //submit
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let body = {
        a_Id: user.id,
        a_Pw: user.pwd,
        a_Brand: user.brand,
        a_Number: user.buisness,
        a_Phone: user.phone,
      };
      try {
        window.alert("데이터 넘기기");
      } catch (err) {
        window.alert(err);
      }
    },
    []
  );

  return (
    <form id="signUpForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="아이디 (5~10자)"
        name="id"
        value={user.id}
        onChange={onChange}
      />
      <span className={`${isSignUp.id ? "success" : "error"}`}>{msg.id}</span>
      <br />
      <>
        <input
          type="password"
          placeholder="비밀번호 (영문,숫자,특수문자 포함(8~20자)"
          name="pwd"
          value={user.pwd || ""}
          onChange={onChange}
          autoComplete="off"
        />
        <span className={`${isSignUp.pwd ? "success" : "error"}`}>
          {msg.pwd}
        </span>
        <br />
        <input
          type="password"
          placeholder="비밀번호 확인"
          name="pwdCheck"
          value={user.pwdCheck || ""}
          onChange={onChange}
          autoComplete="off"
        />
        <span className={`${isSignUp.pwdCheck ? "success" : "error"}`}>
          {msg.pwdCheck}
        </span>
        <br />
      </>
      <>
        <input
          type="text"
          placeholder="상호명"
          name="brand"
          value={user.brand || ""}
          onChange={onChange}
        />
        <br />
        <input
          type="text"
          placeholder="사업자 번호  예) 020-102-1928"
          name="buisness"
          value={user.buisness || ""}
          onChange={onChange}
        />
        <span className={`${isSignUp.buisness ? "success" : "error"}`}>
          {msg.buisness}
        </span>
        <br />
      </>
      <input
        type="tel"
        placeholder="연락처  예) 0100000000"
        name="phone"
        value={user.phone || ""}
        onChange={onChange}
      />
      <span className={`${isSignUp.phone ? "success" : "error"}`}>
        {msg.phone}
      </span>
      <br />
      <input
        type="submit"
        value="회원가입"
        disabled={
          !(
            isSignUp.id &&
            isSignUp.pwd &&
            isSignUp.pwdCheck &&
            isSignUp.brand &&
            isSignUp.buisness &&
            isSignUp.phone
          )
        }
      ></input>
    </form>
  );
};

export default Form;
