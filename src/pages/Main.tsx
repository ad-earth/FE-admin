import { wrap } from "module";
import React from "react";
//components
import AdBanner from "../components/banner/AdBanner";
import SlideBanner from "../components/banner/SlideBanner";
import AdSummary from "../components/graph/AdSummary";
import BizMoney from "../components/mypage/BizMoney";
import ExposedProd from "../components/mypage/ExposedProd";
import KeywordRanking from "../components/mypage/KeywordRanking";
import LastMonthSales from "../components/mypage/LastMonthSales";
import NewOrder from "../components/mypage/NewOrder";
const Main = () => {
  return (
    <section
      id="mainWrap"
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flexGrow: "1" }}>
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
      <div style={{ flexGrow: "1" }}>
        <SlideBanner /> {/* 슬라이드 배너 */}
      </div>
    </section>
  );
};

export default Main;
