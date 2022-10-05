import styles from "./boardContent.module.scss";
import newOrder from "../../../assets/lcon/newOrder.svg";
import lastMonth from "../../../assets/lcon/lastMonth.svg";
import exposedProd from "../../../assets/lcon/exposedProd.svg";
import useBoardContent from "./useBoardContent";

const BoardContent = () => {
  const data = useBoardContent();
  return (
    <section id={styles.board}>
      <article>
        {/* 신규주문 */}
        <div className={`${styles.iconBox} ${styles.newOrder}`}>
          <img src={newOrder} alt="icon"></img>
        </div>
        <div className={styles.info}>
          <h3>신규주문</h3>
          <span>{data[0]?.newProducts} 건</span>
        </div>
      </article>
      <article>
        {/* 전월 매출액 */}
        <div className={`${styles.iconBox} ${styles.lastMonth}`}>
          <img src={lastMonth} alt="icon"></img>
        </div>
        <div className={styles.info}>
          <h3>전월 매출액</h3>
          <span>{data[1]?.productsCnt} 건</span>
        </div>
      </article>
      <article>
        {/* 노출상품 수  */}
        <div className={`${styles.iconBox} ${styles.exposedProd}`}>
          <img src={exposedProd} alt="icon"></img>
        </div>
        <div className={styles.info}>
          <h3>노출 상품 수</h3>
          <span>{data[2]?.lastSales} 건</span>
        </div>
      </article>
    </section>
  );
};
export default BoardContent;
