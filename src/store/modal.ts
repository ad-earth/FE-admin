import { atom } from "recoil";
import { MODAL_TYPES } from "../components/modal/GlobalModal";
import { WithdrawalType } from "../components/modal/withdrawalModal/WithdrawalModal";
import { LogoutType } from "../components/modal/logoutModal/LogoutModal";
import { PostAdType } from "../components/modal/postAdModal/PostAdModal";

//ConfirmModal
export interface ConfirmModalType {
  modalType: typeof MODAL_TYPES.WithdrawalModal;
  modalProps: WithdrawalType;
}
export interface LogoutModalType {
  modalType: typeof MODAL_TYPES.LogoutModal;
  modalProps: LogoutType;
}
export interface PostAdModalType {
  modalType: typeof MODAL_TYPES.PostAdModal;
  modalProps: PostAdType;
}

export type ModalType = ConfirmModalType | LogoutModalType | PostAdModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
