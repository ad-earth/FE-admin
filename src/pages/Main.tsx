import React from "react";
//components
import SlideBanner from "../components/banner/SlideBanner";
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
        flexWrap: "wrap",
        margin: "40px 32px 0 ",
      }}
    >
      <div
        style={{ backgroundColor: "red" }}
        // style={{ flexBasis: `${`calc(100% - 720px)`}`, backgroundColor: "red" }}
      >
        <AdBanner /> {/* 광고 배너 */}
        <BoardContent />
        <div style={{ display: "flex" }}>
          <KeywordRanking />
          <div style={{ flexGrow: "1" }}>
            <BizMoney type="home" />
            <AdSummary />
          </div>
        </div>
      </div>
      <div>
        {/* <div style={{ flexBasis: "720px" }}> */}
        <SlideBanner /> {/* 슬라이드 배너 */}
      </div>
    </div>
  );
};

export default Main;
