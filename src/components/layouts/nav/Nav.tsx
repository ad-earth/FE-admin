import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import { BizMoneyNav } from "../../main/bizMoney/BizMoney";
import { WithdrawalBtn } from "../../../elements/buttons/Buttons";
import useModal from "../../modal/useModal";

const Nav = () => {
  const { showModal } = useModal();

  //회원탈퇴 모달 클릭 => 모달 open
  const withdrawalClcik = () => {
    showModal({
      modalType: "WithdrawalModal",
      modalProps: {
        title:
          "가입된 회원정보가 모두 삭제됩니다.회원 탈퇴를 진행하시겠습니까?",
      },
    });
  };

  return (
    <nav id={styles.nav}>
      {/* Biz money */}
      <div className={styles.bizMoneyBox}>
        <BizMoneyNav />
      </div>
      {/* sideNav */}
      <ul className={styles.asideNav}>
        {nav.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${styles.isActive}` : `${styles.inactive}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.withdrawalBtn}>
        <WithdrawalBtn text="회원탈퇴" onClick={withdrawalClcik} />
      </div>
    </nav>
  );
};
const nav = [
  { id: 1, name: "메인", path: "/home" },
  { id: 2, name: "배송 관리", path: "/shipping_service" },
  { id: 3, name: "상품 등록", path: "/postProd" },
  { id: 4, name: "상품 관리", path: "/setProd" },
  { id: 5, name: "상품 보고서", path: "/sales_report" },
  { id: 6, name: "광고 관리", path: "/setAd" },
  { id: 7, name: "광고 보고서", path: "/ad_report" },
];

export default Nav;
