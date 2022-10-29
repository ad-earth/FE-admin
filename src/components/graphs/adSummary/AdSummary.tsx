import styles from "./adSummary.module.scss";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import useAdSummary from "./useAdSummaryQuery";
import { useWindowResize } from "./useWindowResize";

const AdSummary = () => {
  const { summaryRes } = useAdSummary();
  const month = summaryRes?.map((data) => data.month);
  const adCost = summaryRes?.map((data) => data.adCost);
  const salesCost = summaryRes?.map((data) => data.salesCost);
  //windowSize 반응형 hook
  const windowSize = useWindowResize();
  //series
  const [series, setSeries] = useState(seriesData);
  const copySelectedTags = [...series];
  //options
  const [options, setOptions] = useState(optionData);
  // ReactApexChart 라이브러리 데이터 업데이트
  useEffect(() => {
    if (!summaryRes) return;
    setOptions({ ...options, xaxis: { categories: month } });
    copySelectedTags[0] = { name: "광고비", data: adCost };
    copySelectedTags[1] = { name: "매출", data: salesCost };
    setSeries(copySelectedTags);
  }, [summaryRes]);

  return (
    <section id={styles.adSummary}>
      <h3>광고 요약 보고서</h3>
      <p>최근 3개월 광고비/매출</p>
      {windowSize && (
        <div className={styles.adChart}>
          <ReactApexChart
            series={series}
            options={options}
            type="bar"
            width={windowSize / 4}
            height={280}
          />
        </div>
      )}
    </section>
  );
};

export default AdSummary;

//default data
const seriesData = [
  { name: "광고비", data: [0, 0, 0] },
  { name: "매출", data: [0, 0, 0] },
];
let optionData = {
  chart: { width: 400, background: "transparent" },
  colors: ["#4e60ff", "#009667"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%", //폭
      endingShape: "rounded",
    },
  },
  dataLabels: { enabled: false }, //그래프 숫자 표시
  xaxis: { categories: ["월", "월", "월"] },
  fill: { opacity: 1 }, //그래프 투명도
};
