import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <section>
      <main
        style={{
          width: "100vw",
          display: "flex",
          height: "100vh",
        }}
      >
        <div
          style={{
            width: "50vw",
            height: "100vh",
          }}
        >
          <Outlet />
        </div>

        <div
          style={{
            width: "50vw",
            height: "100vh",
            background: "blue",
          }}
        >
          슬라이드
        </div>
      </main>
    </section>
  );
};

export default LoginLayout;
