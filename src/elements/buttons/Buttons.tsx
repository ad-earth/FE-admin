import {
  PropsType,
  SignUpType,
  WithdrawalType,
  NotFoundType,
} from "./buttons.type";
import "./_buttons.style.scss";
import { ReactComponent as Download } from "../../assets/lcon/download.svg";
import { ReactComponent as Del } from "../../assets/lcon/del.svg";

export const LoginBlueButton = (props: PropsType) => {
  return (
    <button className="login blue" {...props}>
      {props.children}
    </button>
  );
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
export const SignUpBlueButton = (props: SignUpType) => {
  const { value, text, disabled, children } = props;
  return (
    <button className="login blue" value={value} disabled={disabled}>
      {text ? text : children}
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
  return (
    <button className="third blue" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export const SmallWhiteBtn = (props: PropsType) => {
  return (
    <button className="third white" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export const SmallGrayBtn = (props: PropsType) => {
  return (
    <button className="forth" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const ProdDelBtn = (props: PropsType) => {
  return (
    <button className="fifth delete" onClick={props.onClick}>
      <Del style={{ marginRight: "5px" }} />
      상품삭제
    </button>
  );
};

export const ChargeBtn = (props: PropsType) => {
  return (
    <button className="sixth" onClick={props.onClick}>
      {props.children}
    </button>
  );
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
//회원탈퇴
export const WithdrawalBtn = (props: WithdrawalType) => {
  const { text, children, onClick } = props;
  return (
    <button className="withdrawal" onClick={onClick}>
      {text ? text : children}
    </button>
  );
};
//notFound
export const NotFoundBtn = (props: NotFoundType) => {
  const { type, text, children, onClick } = props;
  if (type === "back") {
    return (
      <button className="second back" onClick={onClick}>
        {text ? text : children}
      </button>
    );
  }
  if (type === "home") {
    return (
      <button className="second home" onClick={onClick}>
        {text ? text : children}
      </button>
    );
  }
};
