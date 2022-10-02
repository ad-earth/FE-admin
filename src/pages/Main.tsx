import React from "react";
//components
import SlideBanner from "../components/banner/slideBanner/SlideBanner";
import AdBanner from "../components/banner/adBanner/AdBanner";
import BoardContent from "../components/main/boardContent/BoardContent";
import KeywordRanking from "../components/main/keywordRanking/KeywordRanking";
import BizMoney from "../components/main/bizMoney/BizMoney";
import AdSummary from "../components/graphs/adSummary/AdSummary";

// import useBizeMoney from "../components/main/useBizMoney";
const Main = () => {
  // useBizeMoney();

  return (
    <div id="mainWrap" style={styles.container1}>
      <div style={styles.container1_left}>
        <AdBanner />
        <BoardContent />
        <div style={styles.container2}>
          <div style={styles.container2_left}>
            <KeywordRanking />
          </div>
          <div style={styles.container2_right}>
            <BizMoney type="home" />
            <AdSummary />
          </div>
        </div>
      </div>
      <div style={styles.container1_right}>
        <SlideBanner />
      </div>
    </div>
  );
};

const styles = {
  container1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    margin: "40px 32px",
  } as React.CSSProperties,
  container1_left: {
    width: "58%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  } as React.CSSProperties,
  container1_right: {
    width: "40%",
  } as React.CSSProperties,
  container2: {
    display: "flex",
    justifyContent: "space-between",
  } as React.CSSProperties,
  container2_left: {
    flexBasis: "40%",
  } as React.CSSProperties,
  container2_right: {
    display: "flex",
    flexBasis: "57%",
    flexDirection: "column",
    justifyContent: "space-between",
  } as React.CSSProperties,
};

export default Main;
