import { useEffect } from "react";
import styles from "./defaultLayout.module.scss";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../header/Header";
import Nav from "../nav/Nav";

const DefaultLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 로그인 유저 확인
  useEffect(() => {
    if (token) return;
    navigate("/");
  }, [token]);

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
