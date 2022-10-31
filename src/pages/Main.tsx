import styles from "./styles/main.module.scss";
import MainSectionLayout from "../components/main/mainSectionLayout/MainSectionLayout";
import SlideBanner from "../components/banner/slideBanner/SlideBanner";
import { useQuery } from "react-query";
import { getProdInfo } from "../shared/apis/api";

const Main = () => {
  const { data } = useGetProdInfo(1665328626024);
  console.log(data?.data);
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

const useGetProdInfo = (p_No: number) => {
  const queryFn = async () => await getProdInfo(p_No);
  return useQuery("prodInfo", queryFn, {
    enabled: !!p_No,
  });
};
