import { useState, useEffect } from "react";
import styles from "./withdrawalModal.module.scss";
import { useNavigate } from "react-router-dom";
//elements
import { ModalCancelBtn, ModalDelBtn } from "../../../elements/buttons/Buttons";
//hook
import useModal from "../useModal";
import { useWithdrawal } from "./useWithdrawal";
//mui toast
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export interface WithdrawalModal {
  message: string;
  cancelText: string;
  confirmText: string;
}

const Withdrawal = (props: WithdrawalModal) => {
  const { message, cancelText, confirmText } = props;
  const navigate = useNavigate();
  //에러메세지
  const [errMsg, setErrMsg] = useState<string>();
  //toast alert on/off
  const [open, setOpen] = useState(false);
  //모달 닫기
  const { hideModal } = useModal();
  //회원탈퇴 hook
  const { mutate, isError, isSuccess, error } = useWithdrawal();

  //회원탈퇴 성공시
  if (isSuccess) {
    localStorage.clear();
    navigate("/", { replace: true });
    hideModal();
  }
  //회원탈퇴 에러처리
  useEffect(() => {
    if (isError) {
      console.log(error.response.data.errorMessage);
      setErrMsg(error.response.data.errorMessage);
      setOpen(true);
    }
  }, [isError]);

  return (
    <div className={styles.withdrawal}>
      <div className={styles.modalContent}>
        <h2>{message}</h2>
        <div className={styles.btnBox}>
          <ModalCancelBtn onClick={() => hideModal()}>
            {cancelText}
          </ModalCancelBtn>
          <ModalDelBtn>{confirmText}</ModalDelBtn>
          {/* <ModalDelBtn onClick={() => mutate()}>{confirmText}</ModalDelBtn> */}
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
      >
        <MuiAlert severity="error">{errMsg}</MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Withdrawal;
