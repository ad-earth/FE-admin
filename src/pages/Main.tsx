import styles from "./styles/main.module.scss";
import MainSectionLayout from "../components/main/mainSectionLayout/MainSectionLayout";
import MainBanner from "../components/banner/mainBanner/MainBanner";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <MainSectionLayout />
      </div>
      <div className={styles.container_right}>
        <MainBanner />
      </div>
    </div>
  );
};

export default Main;
