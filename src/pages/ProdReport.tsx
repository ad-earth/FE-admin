import styles from "./styles/prodReport.module.scss";
import ProdContainer from "../components/prodReport/prodContainer/ProdContainer";

const ProdReport = () => {
  return (
    <>
      <h1 className={styles.title}>상품 보고서</h1>
      <ProdContainer />
    </>
  );
};

export default ProdReport;
