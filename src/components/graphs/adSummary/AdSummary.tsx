import React, { useEffect, useState } from "react";
import styles from "./adSummary.module.scss";
import ReactApexChart from "react-apexcharts";
import { SummaryType } from "./adSummary.type";
import useAdSummary from "./useAdSummary";

const AdSummary = () => {
  //hook
  const data: SummaryType[] = useAdSummary();
  //그래프 반응형
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handelResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handelResize);
    return () => window.removeEventListener("resize", handelResize);
  }, [windowSize]);
  //series
  const [series, setSeries] = useState(seriesData);
  const copySelectedTags = [...series];
  //options
  const [options, setOptions] = useState(optionData);
  //데이터 수정
  useEffect(() => {
    if (data) {
      const month = data.map((item) => item.month);
      setOptions({ ...options, xaxis: { categories: month } });
      const adCost = data.map((item) => item.adCost);
      const salesCost = data.map((item) => item.salesCost);
      copySelectedTags[0] = { name: "광고비", data: adCost };
      copySelectedTags[1] = { name: "매출", data: salesCost };
      setSeries(copySelectedTags);
    }
  }, [data]);

  return (
    <section id={styles.adSummary}>
      <h3>광고 요약 보고서</h3>
      <p>최근 3개월 광고비/매출</p>

      <div className={styles.adChart}>
        <ReactApexChart
          series={series}
          options={options}
          type="bar"
          width={windowSize / 4}
          height={280}
        />
      </div>
    </section>
  );
};

export default AdSummary;

//default data
const seriesData = [
  { name: "광고비", data: [0, 0, 0] },
  { name: "매출", data: [233, 0, 0] },
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
