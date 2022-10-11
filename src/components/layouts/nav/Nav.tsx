import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import BizMoney from "../../main/bizMoney/BizMoney";
import { WithdrawalBtn } from "../../../elements/buttons/Buttons";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const withdrawalClcik = () => {
    if (
      window.confirm(
        "가입된 회원정보가 모두 삭제됩니다.회원 탈퇴를 진행하시겠습니까?"
      )
    ) {
      localStorage.clear();
      navigate("/", { replace: true });
    } else {
      return;
    }
  };
  return (
    <nav id={styles.nav}>
      {/* Biz money */}
      <div className={styles.bizMoneyBox}>
        <BizMoney type="nav" />
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
  { id: 3, name: "상품 등록", path: "/PostProd" },
  { id: 4, name: "상품 관리", path: "/setProd" },
  { id: 5, name: "상품 보고서", path: "/prod_report" },
  { id: 6, name: "광고 관리", path: "/SetAd" },
  { id: 7, name: "광고 보고서", path: "/ad_report" },
];

export default Nav;

// EditProd - 상품수정
// PostAd - 광고등록
// SetAd  - 광고관리
// PostProd - 상품등록
// SetProd - 상품관리
