import React from "react";
import SetAdSection from "../components/setAd/setAdSection/SetAdSection";
import styles from "./styles/setAd.module.scss";

const SetAd = () => {
  return (
    <section id={styles.setAd}>
      <h2>광고관리</h2>
      <SetAdSection />
    </section>
  );
};

export default SetAd;
