import { useState } from "react";

import AdChart from "../../graphs/adChart/AdChart";
import { useDate } from "../../prodReport/prodContainer/useDate";
import AdReportTable from "../../tables/adReportTable/AdReportTable";
import AdFilter from "../adFilter/AdFilter";
import styles from "./adContainer.module.scss";
import { useAdQuery } from "./useAdQuery";

const AdContainer = () => {
  const [date, setDate] = useState<string>(null);
  const [productNumber, setProductNumber] = useState<string>(null);

  const todayDate = useDate();
  const adData = useAdQuery(date === null ? todayDate : date, productNumber);

  return (
    <div>
      <div className={styles.chartContainer}>
        <AdFilter setDate={setDate} setProductNumber={setProductNumber} />
        <div className={styles.chart}>
          <h3>3개월 간 광고 키워드 클릭 수 & 전환 수</h3>
          <AdChart dataList={adData.data?.data.list} />
        </div>
        <AdReportTable dataList={adData.data?.data.list} />
      </div>
    </div>
  );
};

export default AdContainer;
