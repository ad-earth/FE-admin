import AdBanner from "../../banner/adBanner/AdBanner";
import AdSummary from "../../graphs/adSummary/AdSummary";
import BizMoney from "../bizMoney/BizMoney";
import BoardContent from "../boardContent/BoardContent";
import KeywordRanking from "../keywordRanking/KeywordRanking";
import styles from "./MainSectionLayout.module.scss";

const MainSectionLayout = () => {
  return (
    <>
      <AdBanner />
      <BoardContent />
      <div className={styles.container}>
        <div className={styles.container_left}>
          <KeywordRanking />
        </div>
        <div className={styles.container_right}>
          <BizMoney type="home" />
          <AdSummary />
        </div>
      </div>
    </>
  );
};

export default MainSectionLayout;
