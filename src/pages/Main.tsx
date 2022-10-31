import MainSectionLayout from "../components/main/mainSectionLayout/MainSectionLayout";
import SlideBanner from "../components/banner/slideBanner/SlideBanner";
import { getAd, getAdProd, getDetail } from "../shared/apis/api";

const Main = () => {
  const call = getDetail(1665348688939);
  console.log("call: ", call);
  const ball = getAdProd(1665348688939);
  console.log("ball: ", ball);

  return (
    <div id="mainWrap" style={styles.container1}>
      <div style={styles.container_left}>
        <MainSectionLayout />
      </div>
      <div style={styles.container_right}>
        <SlideBanner />
      </div>
    </div>
  );
};

const styles = {
  container1: {
    display: "flex",
    justifyContent: "space-between",
    margin: "40px 32px",
  } as React.CSSProperties,
  container_left: {
    width: "58%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  } as React.CSSProperties,
  container_right: {
    width: "40%",
  } as React.CSSProperties,
};

export default Main;
