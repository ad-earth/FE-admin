import styles from "./header.module.scss";
import logo from "../../../assets/logo/header.svg";
import { SmallWhiteBtn } from "../../../elements/buttons/Buttons";
import { useNavigate } from "react-router-dom";
import useModal from "../../modal/useModal";

const Header = () => {
  const navigate = useNavigate();
  const { showModal } = useModal();

  //로그아웃 클릭 => 모달 open
  const logoutClcik = () => {
    showModal({
      modalType: "LogoutModal",
      modalProps: {
        title: "로그아웃 하시겠습니까?",
      },
    });
  };

  return (
    <header>
      <img src={logo} alt="logo" onClick={() => navigate("/home")} />
      <div className={styles.headerRight}>
        <SmallWhiteBtn onClick={() => navigate("/PostProd")}>
          상품등록
        </SmallWhiteBtn>
        <span onClick={logoutClcik}>로그아웃</span>
      </div>
    </header>
  );
};

export default Header;
