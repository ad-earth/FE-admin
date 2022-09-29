import React from "react";
//components
import AdBanner from "../components/banner/adBanner/AdBanner";
import SlideBanner from "../components/banner/SlideBanner";
import AdSummary from "../components/graph/AdSummary";
import BizMoney from "../components/main/BizMoney";
import ExposedProd from "../components/main/ExposedProd";
import KeywordRanking from "../components/main/KeywordRanking";
import LastMonthSales from "../components/main/LastMonthSales";
import NewOrder from "../components/main/NewOrder";
import useBizeMoney from "../components/main/useBizMoney";
const Main = () => {
  // useBizeMoney();
  return (
    <section
      id="mainWrap"
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        margin: "40px 32px 0 ",
      }}
    >
      <div
        style={{ backgroundColor: "red" }}
        // style={{ flexBasis: `${`calc(100% - 720px)`}`, backgroundColor: "red" }}
      >
        <AdBanner /> {/* 광고 배너 */}
        <div style={{ display: "flex" }}>
          <NewOrder /> {/* 신규주문 */}
          <LastMonthSales /> {/* 전월 매출액 */}
          <ExposedProd /> {/* 노출상품 수  */}
        </div>
        <div style={{ display: "flex" }}>
          <KeywordRanking /> {/* 키워드랭킹 */}
          <div>
            <BizMoney /> {/* 비즈머니 */}
            <AdSummary /> {/* 광고 요약 보고서 */}
          </div>
        </div>
      </div>
      <div>
        {/* <div style={{ flexBasis: "720px" }}> */}
        <SlideBanner /> {/* 슬라이드 배너 */}
      </div>
    </section>
  );
};

export default Main;
