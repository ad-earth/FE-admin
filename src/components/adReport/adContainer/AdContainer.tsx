import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  selectedEndDateState,
  selectedProductNumberState,
  selectedStartDateState,
} from "../../../store/filter";

import AdChart from "../../graphs/adChart/AdChart";
import AdReportTable from "../../tables/adReportTable/AdReportTable";
import AdFilter from "../adFilter/AdFilter";
import styles from "./adContainer.module.scss";
import { useGetAdQuery } from "./useGetAdQuery";

const AdContainer = () => {
  const [productNumber, setProductNumber] = useRecoilState(
    selectedProductNumberState
  );
  const [startDate, setStartDate] = useRecoilState(selectedStartDateState);
  const [endDate, setEndDate] = useRecoilState(selectedEndDateState);

  const adDataQuery = useGetAdQuery(
    `[${startDate},${endDate}]`,
    String(productNumber)
  );

  return (
    <div>
      <div className={styles.chartContainer}>
        <AdFilter />
        <div className={styles.chart}>
          <h3>3개월 간 광고 키워드 클릭 수 & 전환 수</h3>
          <AdChart dataList={adDataQuery.data?.data.list} />
        </div>
        <AdReportTable dataList={adDataQuery.data?.data.list} />
      </div>
    </div>
  );
};

export default AdContainer;
