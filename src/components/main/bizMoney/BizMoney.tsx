import styles from "./bizMoney.module.scss";
import { ChargeBtn, SmallBlueBtn } from "../../../elements/buttons/Buttons";
import bizNav from "../../../assets/lcon/bizNav.svg";
import { useGetBizQuery, usePutBizQuery } from "./useBizMoneyQuery";

//nav
const BizMoneyNav = () => {
  return (
    <section className={`${styles.bizMoney} ${styles.nav}`}>
      <div className={styles.titleBox}>
        <img src={bizNav} alt="bizIcon" />
        <h3>Biz money</h3>
      </div>
      <MoneyBox boxSize={true} />
    </section>
  );
};
//home
const BizMoneyHome = () => {
  const subtitle = "비즈머니를 간편하 게 충전하세요";
  return (
    <section className={`${styles.bizMoney} ${styles.home}`}>
      <h3>내 비즈머니</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <MoneyBox boxSize={false} />
    </section>
  );
};
export { BizMoneyNav, BizMoneyHome };

//base
function MoneyBox({ boxSize }: { boxSize: boolean }) {
  const button = boxSize ? "충전" : "충전하기";
  const { data: bizMoneyRes } = useGetBizQuery();
  const { mutate } = usePutBizQuery();
  return (
    <div className={styles.money}>
      <p>
        {bizMoneyRes?.data.a_Charge} <span>원</span>
      </p>
      {boxSize ? (
        <ChargeBtn onClick={() => mutate()}>{button}</ChargeBtn>
      ) : (
        <SmallBlueBtn onClick={() => mutate()}>{button}</SmallBlueBtn>
      )}
    </div>
  );
}
