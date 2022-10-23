import { forwardRef } from "react";
import { PropsType } from "./inputs.type";
import "./_inputs.style.scss";

// w 335px, h 60px
// 로그인 & 계정찾기
export const LoginInput = (props: PropsType) => {
  return (
    <input
      className="login"
      placeholder={props.placeholder}
      type="text"
      value={props.value}
      onChange={(e) => props.setInput(e.target.value)}
      onKeyDown={props.onKeyDown}
    />
  );
};
export const PwdInput = (props: PropsType) => {
  return (
    <input
      className="login"
      placeholder={props.placeholder}
      type="password"
      value={props.value}
      onChange={(e) => props.setInput(e.target.value)}
      onKeyDown={props.onKeyDown}
    />
  );
};
//회원가입
export const SingUpInput = (props: PropsType) => {
  const { value, name, placeholder, onChange } = props;
  return (
    <input
      className="login"
      placeholder={placeholder}
      type="text"
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};
export const SingUpPwdInput = (props: PropsType) => {
  const { value, name, placeholder, onChange } = props;
  return (
    <input
      className="login"
      placeholder={placeholder}
      type="password"
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

// w 100px, h 40px
// 상품등록 & 광고등록
export const Input100 = (props: PropsType) => {
  return (
    <input
      className="input100"
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={(e) => {
        props.setInputNum && props.setInputNum(Number(e.target.value));
      }}
      min={props.min}
    />
  );
};

// w 200px, h 40px
// 상품등록
export const Input200 = forwardRef<HTMLInputElement, PropsType>(
  (props, ref) => {
    return (
      <input
        className="input200"
        placeholder={props.placeholder}
        disabled={props.disabled}
        value={props.value}
        name={props.name}
        type="text"
        ref={ref}
        onChange={props.onChange}
      />
    );
  }
);

// w 250px, h 40px
// 상품등록
export const Input250 = (props: PropsType) => {
  return (
    <input
      className="input250"
      placeholder={props.placeholder}
      type="text"
      value={props.value}
      onChange={(e) => {
        props.setInput && props.setInput(e.target.value);
      }}
    />
  );
};

// w 290px, h 40px
// 광고등록
export const Input290 = (props: PropsType) => {
  const { value, onChange, placeholder } = props;
  return (
    <input
      className="input290"
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

// w 500px, h 40px
// 상품등록
export const Input500 = (props: PropsType) => {
  return (
    <input
      className="input500"
      placeholder={props.placeholder}
      type="text"
      value={props.value}
      onChange={(e) => {
        props.setInput && props.setInput(e.target.value);
      }}
    />
  );
};
