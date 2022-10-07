import { PropsType } from "./inputs.type";
import "./_inputs.style.scss";

// w 335px, h 60px
// 로그인 & 계정찾기 & 회원가입
const LoginInput = (props: PropsType) => {
  return (
    <input
      className="login"
      placeholder={props.placeholder}
      type={props.type}
      onChange={(e) => {
        props.setId && props.setId(e.target.value);
        props.setPwd && props.setPwd(e.target.value);
      }}
    />
  );
};

// w 100px, h 40px
// 상품등록 & 광고등록
export const Input100 = () => {
  return <input className="input100" placeholder="0" type="text" />;
};

// w 200px, h 40px
// 상품등록
export const Input200 = (props: PropsType) => {
  return (
    <input className="input200" placeholder={props.placeholder} type="text" />
  );
};

// w 250px, h 40px
// 상품등록
export const Input250 = () => {
  return <input className="input250" placeholder="상품 가격" type="text" />;
};

// w 290px, h 40px
// 광고등록
export const Input290 = () => {
  return <input className="input290" placeholder="키워드 입력" type="text" />;
};

// w 500px, h 40px
// 상품등록
export const Input500 = () => {
  return <input className="input500" placeholder="상품명" type="text" />;
};

export default LoginInput;
