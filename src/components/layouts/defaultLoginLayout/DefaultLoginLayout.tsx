import React from "react";
import "./defaultLoginLayout.style.scss";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div id="LoginLayout">
      <main>
        <div className="mainWrap">
          <Outlet />
        </div>
        <div className="slideBannerWrap">슬라이드</div>
      </main>
    </div>
  );
};

export default LoginLayout;
