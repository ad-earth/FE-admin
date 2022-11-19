import styles from "./styles/main.module.scss";
import MainSectionLayout from "../components/main/mainSectionLayout/MainSectionLayout";
import MainBanner from "../components/banner/mainBanner/MainBanner";

const Main = () => {
  return (
    <div id="mainWrap" className={styles.container1}>
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
