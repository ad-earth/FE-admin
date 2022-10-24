import styles from "./styles/main.module.scss";
import MainSectionLayout from "../components/main/mainSectionLayout/MainSectionLayout";
import SlideBanner from "../components/banner/slideBanner/SlideBanner";

const Main = () => {
  return (
    <div id="mainWrap" className={styles.container1}>
      <div className={styles.container_left}>
        <MainSectionLayout />
      </div>
      <div className={styles.container_right}>
        <SlideBanner />
      </div>
    </div>
  );
};

export default Main;
