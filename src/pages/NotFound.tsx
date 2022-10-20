import styles from "./styles/notFound.module.scss";
import { NotFoundBtn } from "../elements/buttons/Buttons";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section id={styles.notFound}>
      <h1>404</h1>
      <h3>Not Found</h3>
      <p>
        페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br />
        입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      </p>
      <div className={styles.btnBox}>
        <NotFoundBtn type="back" text="이전화면" onClick={() => navigate(-1)} />
        <NotFoundBtn
          type="home"
          text="홈으로 가기"
          onClick={() => navigate("/home")}
        />
      </div>
    </section>
  );
};

export default NotFound;
