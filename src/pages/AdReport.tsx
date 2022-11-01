import styles from "./styles/adReport.module.scss";
import AdContainer from "../components/adReport/adContainer/AdContainer";

const AdReport = () => {
  return (
    <>
      <h1 className={styles.title}>광고 보고서</h1>
      <AdContainer />
    </>
  );
};

export default AdReport;
