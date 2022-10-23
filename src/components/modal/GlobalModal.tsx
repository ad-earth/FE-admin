import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../../store/modal";
import WithdrawalModal from "./withdrawalModal/WithdrawalModal";
import LogoutModal from "./logoutModal/LogoutModal";
import PostAdModal from "./postAdModal/PostAdModal";

export const MODAL_TYPES = {
  WithdrawalModal: "WithdrawalModal",
  LogoutModal: "LogoutModal",
  PostAdModal: "PostAdModal",
} as const;

const modalComponents: any = {
  [MODAL_TYPES.WithdrawalModal]: WithdrawalModal,
  [MODAL_TYPES.LogoutModal]: LogoutModal,
  [MODAL_TYPES.PostAdModal]: PostAdModal,
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
