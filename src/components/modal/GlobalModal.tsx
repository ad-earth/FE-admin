import React from "react";
import { useRecoilState } from "recoil";
import WithdrawalModal from "./withdrawalModal/WithdrawalModal";
import { modalState } from "../../store/modal";
import LogoutModal from "./logoutModal/LogoutModal";

export const MODAL_TYPES = {
  WithdrawalModal: "WithdrawalModal",
  LogoutModal: "LogoutModal",
} as const;

const modalComponents: any = {
  [MODAL_TYPES.WithdrawalModal]: WithdrawalModal,
  [MODAL_TYPES.LogoutModal]: LogoutModal,
};

const GlobalModal = () => {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = modalComponents[modalType];

    return <ModalComponent {...modalProps} />;
  };

  return <>{renderComponent()}</>;
};

export default GlobalModal;
