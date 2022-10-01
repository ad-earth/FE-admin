import React, { useState } from "react";
import "./adSummary.style.scss";
import ReactApexChart from "react-apexcharts";

let seriesData = [
  { name: "광고비", data: [76, 85, 101] },
  { name: "매출", data: [35, 41, 150] },
];
let optionData = {
  chart: { width: 450, height: 260, background: "transparent" },
  colors: ["#4e60ff", "#009667"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%", //폭
      endingShape: "rounded",
    },
  },
  dataLabels: { enabled: false }, //그래프 숫자 표시
  xaxis: { categories: ["Feb", "Mar", "Apr"] },
  fill: { opacity: 1 }, //그래프 투명도
};
const AdSummary = () => {
  const [series, srtSeries] = useState(seriesData);
  const [options, setOptions] = useState(optionData);
  return (
    <section id="adSummary">
      <h3>광고 요약 보고서</h3>
      <p>최근 3개월 광고비/매출</p>

      <ReactApexChart
        series={series}
        options={options}
        type="bar"
        width={450}
        height={260}
      />
    </section>
  );
};

export default AdSummary;
