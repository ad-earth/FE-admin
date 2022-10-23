import SetProdSection from "../components/setProd/setProdSection/SetProdSection";
import styles from "./styles/setProd.module.scss";

const SetProd = () => {
  return (
    <section id={styles.setProdWrap}>
      <h2 className={styles.title}>상품관리</h2>
      <SetProdSection />
    </section>
  );
};

export default SetProd;
