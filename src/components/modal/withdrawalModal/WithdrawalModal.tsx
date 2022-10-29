import { useState, useEffect } from "react";
import styles from "./withdrawalModal.module.scss";
import { useNavigate } from "react-router-dom";
import { ModalCancelBtn, ModalDelBtn } from "../../../elements/buttons/Buttons";
import useModal from "../useModal";
import { useWithdrawalQuery } from "./useWithdrawalQuery";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { WithdrawalType } from "./withdrawalModal.type";

const WithdrawalModal = ({ title }: WithdrawalType) => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState<string>();
  //toast alert on/off
  const [open, setOpen] = useState(false);
  const { hideModal } = useModal();
  const { mutate, isError, isSuccess, error } = useWithdrawalQuery();
  //회원탈퇴 성공시
  if (isSuccess) {
    localStorage.clear();
    navigate("/", { replace: true });
    hideModal();
  }
  //회원탈퇴 에러처리
  useEffect(() => {
    if (!isError) return;
    setErrMsg(error.response.data.errorMessage);
    setOpen(true);
  }, [isError]);

  return (
    <div className={styles.withdrawal}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <div className={styles.btnBox}>
          <ModalCancelBtn onClick={() => hideModal()}>취소</ModalCancelBtn>
          <ModalDelBtn onClick={() => mutate()}>탈퇴하기</ModalDelBtn>
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

export default WithdrawalModal;
