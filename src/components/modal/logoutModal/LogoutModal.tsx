import styles from "./logoutModal.module.scss";
import { ModalCancelBtn, ModalDelBtn } from "../../../elements/buttons/Buttons";
import useModal from "../useModal";
import { useNavigate } from "react-router-dom";

export interface LogoutModalProps {
  message: string;
  cancelText: string;
  confirmText: string;
}

const LogoutModal = (props: LogoutModalProps) => {
  const { message, cancelText, confirmText } = props;
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
        <h2>{message}</h2>
        <div className={styles.btnBox}>
          <ModalCancelBtn onClick={() => hideModal()}>
            {cancelText}
          </ModalCancelBtn>
          <ModalDelBtn onClick={logoutClick}>{confirmText}</ModalDelBtn>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
