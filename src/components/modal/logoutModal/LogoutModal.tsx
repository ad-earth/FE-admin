import styles from "./logoutModal.module.scss";
import { ModalCancelBtn, ModalDelBtn } from "../../../elements/buttons/Buttons";
import useModal from "../useModal";
import { useNavigate } from "react-router-dom";

export interface LogoutType {
  title: string;
}

const LogoutModal = (props: LogoutType) => {
  const { title } = props;
  const navigate = useNavigate();

  //모달 닫기
  const { hideModal } = useModal();

  //로그아웃 버튼 클릭
  const logoutClick = () => {
    localStorage.clear();
    navigate("/", { replace: true });
    hideModal();
  };

  return (
    <div className={styles.logout}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <div className={styles.btnBox}>
          <ModalCancelBtn onClick={() => hideModal()}>취소</ModalCancelBtn>
          <ModalDelBtn onClick={logoutClick}>로그아웃</ModalDelBtn>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
