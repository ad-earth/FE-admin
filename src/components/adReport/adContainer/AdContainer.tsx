import styles from "./adContainer.module.scss";
import { useRecoilValue } from "recoil";
import { useGetAdQuery } from "./useGetAdQuery";
import {
  selectedEndDateState,
  selectedProductNumberState,
  selectedStartDateState,
} from "../../../store/filter";
import AdFilter from "../adFilter/AdFilter";
import AdChart from "../../graphs/adChart/AdChart";
import AdReportTable from "../../tables/adReportTable/AdReportTable";

const AdContainer = () => {
  const productNumber = useRecoilValue(selectedProductNumberState);
  const startDate = useRecoilValue(selectedStartDateState);
  const endDate = useRecoilValue(selectedEndDateState);

  const adDataQuery = useGetAdQuery(
    `[${startDate},${endDate}]`,
    String(productNumber)
  );

  return (
    <div className={styles.chartContainer}>
      <AdFilter />
      <div className={styles.chart}>
        <h3>3개월 간 광고 키워드 클릭 수 & 전환 수</h3>
        <AdChart dataList={adDataQuery.data?.data.list} />
      </div>
      <AdReportTable dataList={adDataQuery.data?.data.list} />
    </div>
  );
};

export default AdContainer;
