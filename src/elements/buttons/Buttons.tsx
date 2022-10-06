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

export const MediumBlueBtn = (props: PropsType) => {
  return <button className="second blue">{props.children}</button>;
};
export const MediumWhiteBtn = (props: PropsType) => {
  return <button className="second white">{props.children}</button>;
};
export const SmallBlueBtn = (props: PropsType) => {
  return <button className="third blue">{props.children}</button>;
};
export const SmallWhiteBtn = (props: PropsType) => {
  return <button className="third white">{props.children}</button>;
};
export const SmallGrayBtn = (props: PropsType) => {
  return <button className="forth">{props.children}</button>;
};
export const ProdDownBtn = (props: PropsType) => {
  return (
    <button className="fifth download">
      <Download style={{ marginRight: "7px" }} />
      파일 내려받기
    </button>
  );
};
export const ProdDelBtn = (props: PropsType) => {
  return (
    <button className="fifth delete">
      <Del style={{ marginRight: "5px" }} />
      상품삭제
    </button>
  );
};

export const ChargeBtn = (props: PropsType) => {
  return <button className="sixth">{props.children}</button>;
};
export const ModalCancelBtn = (props: PropsType) => {
  return <button className="seventh cancel">{props.children}</button>;
};
export const ModalDelBtn = (props: PropsType) => {
  return <button className="seventh del">{props.children}</button>;
};
export const ConfirmBtn = (props: PropsType) => {
  return <button className="eight">{props.children}</button>;
};
