import { memo, useEffect, useState } from "react";
import styles from "./bizMoney.module.scss";
//elements
import { ChargeBtn, SmallBlueBtn } from "../../../elements/buttons/Buttons";
//icon img
import bizNav from "../../../assets/lcon/bizNav.svg";
import { useGetBiz, usePutBiz } from "./useBizMoney";
//hook
// import useBizMoney from "./useBizMoney";
import { PropsType } from "./bizMomey.type";

const BizMoney = (props: PropsType) => {
  const { type } = props;
  //text
  const title = type === "home" ? <h3>Biz money</h3> : <h3>내 비즈머니</h3>;
  const subtitle = "비즈머니를 간편하 게 충전하세요";
  const button = type === "home" ? "충전하기" : "충전";
  //biz data
  const [money, setMoney] = useState<number>();

  const { data } = useGetBiz();
  const { mutate } = usePutBiz();

  const bizBtnClick = () => {
    mutate();
  };

  if (type === "nav") {
    return (
      <section className={`${styles.bizMoney} ${styles.nav}`}>
        <div className={styles.titleBox}>
          <img src={bizNav} alt="bizIcon" />
          {title}
        </div>
        <div className={styles.money}>
          <p>
            {data?.data.a_Charge} <span>원</span>
          </p>
          <ChargeBtn onClick={bizBtnClick}>{button}</ChargeBtn>
        </div>
      </section>
    );
  }
  if (type === "home") {
    return (
      <section className={`${styles.bizMoney} ${styles.home}`}>
        {title}
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.money}>
          <p>
            {data?.data.a_Charge} <span>원</span>
          </p>
          <SmallBlueBtn onClick={bizBtnClick}>{button}</SmallBlueBtn>
        </div>
      </section>
    );
  }
};

export default memo(BizMoney);
