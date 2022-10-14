import { useEffect } from "react";
import styles from "./defaultLayout.module.scss";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//components
import Header from "../header/Header";
import Nav from "../nav/Nav";

const DefaultLayout = () => {
  const navigate = useNavigate();

  // 로그인 유저 확인
  useEffect(() => {
    !localStorage.getItem("token") && navigate("/");
  }, []);

  return (
    <div id={styles.DefaultLayout}>
      <Header />
      <main>
        <Nav />
        <div className={styles.mainWrap}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DefaultLayout;
