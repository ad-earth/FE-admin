import { PropsType } from "./buttons.type";
import "./_buttons.style.scss";
import { ReactComponent as Download } from "../../assets/lcon/download.svg";
import { ReactComponent as Del } from "../../assets/lcon/del.svg";

export const LoginBlueButton = (props: PropsType) => {
  return <button className="login blue">{props.children}</button>;
};
export const LoginJiguButton = () => {
  return (
    <button
      className="login jigu"
      onClick={() => window.open("https://www.adearth.shop/")}
    >
      지구샵 바로가기
    </button>
  );
};

export const SecondBlueBtn = (props: PropsType) => {
  return <button className="second blue">{props.children}</button>;
};
export const SecondWhiteBtn = (props: PropsType) => {
  return <button className="second white">{props.children}</button>;
};
export const ThirdBlueBtn = (props: PropsType) => {
  return <button className="third blue">{props.children}</button>;
};
export const ThirdWhiteBtn = (props: PropsType) => {
  return <button className="third white">{props.children}</button>;
};
export const ForthBtn = (props: PropsType) => {
  return <button className="forth">{props.children}</button>;
};
export const FifthDownBtn = (props: PropsType) => {
  return (
    <button className="fifth download">
      <Download style={{ marginRight: "7px" }} />
      파일 내려받기
    </button>
  );
};
export const FifthDelBtn = (props: PropsType) => {
  return (
    <button className="fifth delete">
      <Del style={{ marginRight: "5px" }} />
      상품삭제
    </button>
  );
};

export const SixthBtn = (props: PropsType) => {
  return <button className="sixth">{props.children}</button>;
};
