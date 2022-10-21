import AdContainer from "../components/adReport/adContainer/AdContainer";
import styles from "./styles/adReport.module.scss";

const AdReport = () => {
  return (
    <div>
      <h1 className={styles.title}>광고 보고서</h1>
      <AdContainer />
    </div>
  );
};

export default AdReport;
