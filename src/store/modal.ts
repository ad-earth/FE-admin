import { atom } from "recoil";
import { MODAL_TYPES } from "../components/modal/GlobalModal";
import { WithdrawalModal } from "../components/modal/withdrawalModal/WithdrawalModal";
import { LogoutModalProps } from "../components/modal/logoutModal/LogoutModal";

//ConfirmModal
export interface ConfirmModalType {
  modalType: typeof MODAL_TYPES.WithdrawalModal;
  modalProps: WithdrawalModal;
}
//ConfirmModal
export interface LogoutModalType {
  modalType: typeof MODAL_TYPES.LogoutModal;
  modalProps: LogoutModalProps;
}

export type ModalType = ConfirmModalType | LogoutModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
