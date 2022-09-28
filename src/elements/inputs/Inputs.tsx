import { PropsType } from "./inputs.type";
import "./_inputs.style.scss";

const LoginInput = (props: PropsType) => {
  return <input placeholder={props.placeholder} />;
};

export default LoginInput;
