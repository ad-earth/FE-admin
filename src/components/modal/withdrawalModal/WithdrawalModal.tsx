import styles from "./withdrawalModal.module.scss";
import { useNavigate } from "react-router-dom";
import { ModalCancelBtn, ModalDelBtn } from "../../../elements/buttons/Buttons";
import useModal from "../useModal";
import { useWithdrawalQuery } from "./useWithdrawalQuery";
import { WithdrawalType } from "./withdrawalModal.type";

const WithdrawalModal = ({ title }: WithdrawalType) => {
  const navigate = useNavigate();
  const { hideModal } = useModal();
  const { mutate, isSuccess } = useWithdrawalQuery();
  //회원탈퇴 성공시
  if (isSuccess) {
    localStorage.clear();
    navigate("/", { replace: true });
    hideModal();
  }

  return (
    <div className={styles.withdrawal}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <div className={styles.btnBox}>
          <ModalCancelBtn onClick={() => hideModal()}>취소</ModalCancelBtn>
          <ModalDelBtn onClick={() => mutate()}>탈퇴하기</ModalDelBtn>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalModal;
