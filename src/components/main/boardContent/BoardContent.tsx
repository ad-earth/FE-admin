import styles from "./boardContent.module.scss";
import newOrder from "../../../assets/lcon/newOrder.svg";
import lastMonth from "../../../assets/lcon/lastMonth.svg";
import exposedProd from "../../../assets/lcon/exposedProd.svg";
import useBoardContentQuery from "./useBoardContentQuery";

const BoardContent = () => {
  const { data: boardRes } = useBoardContentQuery();
  return (
    <section id={styles.board}>
      <article>
        {/* 신규주문 */}
        <div className={`${styles.iconBox} ${styles.newOrder}`}>
          <img src={newOrder} alt="icon"></img>
        </div>
        <div className={styles.info}>
          <h3>신규주문</h3>
          <span>{boardRes[0]?.newOrders} 건</span>
        </div>
      </article>
      <article>
        {/* 전월 매출액 */}
        <div className={`${styles.iconBox} ${styles.lastMonth}`}>
          <img src={lastMonth} alt="icon"></img>
        </div>
        <div className={styles.info}>
          <h3>전월 매출액</h3>
          <span>{boardRes[1]?.lastSales} 원</span>
        </div>
      </article>
      <article>
        {/* 노출상품 수  */}
        <div className={`${styles.iconBox} ${styles.exposedProd}`}>
          <img src={exposedProd} alt="icon"></img>
        </div>
        <div className={styles.info}>
          <h3>노출 상품 수</h3>
          <span>{boardRes[2]?.productsCnt} 건</span>
        </div>
      </article>
    </section>
  );
};
export default BoardContent;
