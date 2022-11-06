import styles from "./defaultLoginLayout.module.scss";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div id={styles.LoginLayout}>
      <main>
        <div className={styles.mainWrap}>
          <Outlet />
        </div>
        <div className={styles.slideBannerWrap}>슬라이드</div>
      </main>
    </div>
  );
};

export default LoginLayout;
