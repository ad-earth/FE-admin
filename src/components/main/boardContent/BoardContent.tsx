import React, { useState } from "react";
import "./boardContent.style.scss";
import exposedProd from "../../../assets/lcon/exposedProd.svg";
import lastMonth from "../../../assets/lcon/lastMonth.svg";
import newOrder from "../../../assets/lcon/newOrder.svg";

const BoardContent = () => {
  const [data, setData] = useState<number>(0);
  return (
    <section id="board">
      <article>
        {/* 신규주문 */}
        <div className="iconBox newOrder">
          <img src={newOrder} alt="icon"></img>
        </div>
        <div className="info">
          <h3>신규주문</h3>
          <span>{data} 건</span>
        </div>
      </article>
      <article>
        {/* 전월 매출액 */}
        <div className="iconBox lastMonth">
          <img src={lastMonth} alt="icon"></img>
        </div>
        <div className="info">
          <h3>전월 매출액</h3>
          <span>{data} 건</span>
        </div>
      </article>
      <article>
        {/* 노출상품 수  */}
        <div className="iconBox exposedProd">
          <img src={exposedProd} alt="icon"></img>
        </div>
        <div className="info">
          <h3>노출 상품 수</h3>
          <span>{data} 건</span>
        </div>
      </article>
    </section>
  );
};

export default BoardContent;
