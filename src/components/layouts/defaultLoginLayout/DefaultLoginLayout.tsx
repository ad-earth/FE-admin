import styles from "./defaultLoginLayout.module.scss";
import { Outlet } from "react-router-dom";
import SlideBanner from "../../banner/slideBanner/SlideBanner";

const LoginLayout = () => {
  return (
    <div id={styles.LoginLayout}>
      <main>
        <div className={styles.mainWrap}>
          <Outlet />
        </div>
        <div className={styles.slideBannerWrap}>
          <SlideBanner />
        </div>
      </main>
    </div>
  );
};

export default LoginLayout;
