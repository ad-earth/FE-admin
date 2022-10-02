import React from "react";
//components
import SlideBanner from "../components/banner/slideBanner/SlideBanner";
import AdBanner from "../components/banner/adBanner/AdBanner";
import BoardContent from "../components/main/boardContent/BoardContent";
import KeywordRanking from "../components/main/keywordRanking/KeywordRanking";
import BizMoney from "../components/main/bizMoney/BizMoney";
import AdSummary from "../components/graph/adSummary/AdSummary";

// import useBizeMoney from "../components/main/useBizMoney";
const Main = () => {
  // useBizeMoney();
  return (
    <div
      id="mainWrap"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        margin: "40px 32px",
        // backgroundColor: "blue",
      }}
    >
      <div style={{ height: "100%", width: "58%" }}>
        <AdBanner /> {/* 광고 배너 */}
        <BoardContent />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ flexBasis: "40%" }}>
            <KeywordRanking />
          </div>
          <div
            style={{
              flexBasis: "57%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <BizMoney type="home" />
            <AdSummary />
          </div>
        </div>
      </div>
      <div style={{ width: "40%" }}>
        <SlideBanner /> {/* 슬라이드 배너 */}
      </div>
    </div>
  );
};

export default Main;
