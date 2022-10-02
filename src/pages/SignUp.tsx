import { useNavigate } from "react-router-dom";
import Form from "../components/signUp/Form";

const SignUp = () => {
  const navigate = useNavigate();
  console.log("000");
  return (
    <div>
      로고
      <span>사업자 회원가입</span>
      <Form />
      <p>
        이미 계정이 있으신가요?
        <span
          onClick={() => {
            navigate(`/`);
          }}
        >
          로그인
        </span>
      </p>
    </div>
  );
};

export default SignUp;
