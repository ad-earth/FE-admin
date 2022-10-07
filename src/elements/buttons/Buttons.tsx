import { PropsType } from "./buttons.type";
import "./_buttons.style.scss";

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
