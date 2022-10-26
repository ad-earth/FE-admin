import { useRecoilState } from "recoil";
import { ModalType, modalState } from "../../store/modal";

export default function useModal() {
  const [modal, setModal] = useRecoilState(modalState);

  const showModal = ({ modalType, modalProps }: ModalType) => {
    setModal({ modalType, modalProps });
    document.body.style.overflow = "hidden"; //모달 스크롤 방지
  };

  const hideModal = () => {
    setModal(null);
    document.body.style.overflow = "unset"; //모달 스크롤 방지
  };

  return {
    modal,
    setModal,
    showModal,
    hideModal,
  };
}
