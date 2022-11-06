import { atom } from "recoil";
import { modalTypes } from "../components/modal/GlobalModal";
import { WithdrawalType } from "../components/modal/withdrawalModal/withdrawalModal.type";
import { LogoutType } from "../components/modal/logoutModal/logoutModal.type";
import { PostAdType } from "../components/modal/postAdModal/postAdModal.type";

//ConfirmModal
export interface ConfirmModalType {
  modalType: typeof modalTypes.WithdrawalModal;
  modalProps: WithdrawalType;
}
export interface LogoutModalType {
  modalType: typeof modalTypes.LogoutModal;
  modalProps: LogoutType;
}
export interface PostAdModalType {
  modalType: typeof modalTypes.PostAdModal;
  modalProps: PostAdType;
}

export type ModalType = ConfirmModalType | LogoutModalType | PostAdModalType;

export const modalState = atom<ModalType | null>({
  key: "modalState",
  default: null,
});
