import ProdContainer from "../components/prodReport/prodContainer/ProdContainer";
import styles from "./styles/prodReport.module.scss";

const ProdReport = () => {
  return (
    <div>
      <h1 className={styles.title}>상품 보고서</h1>
      <ProdContainer />
    </div>
  );
};

export default ProdReport;
