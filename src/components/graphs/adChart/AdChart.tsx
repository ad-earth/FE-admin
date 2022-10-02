import Chart from "react-apexcharts";

import { testData } from "./test";
import "./_adChart.style.scss";

const AdChart = () => {
  let keywordList: string[] = [];
  testData.map((x) => {
    keywordList.push(x.keyword);
  });
  let clickCntList: number[] = [];
  testData.map((x) => {
    clickCntList.push(x.k_Click);
  });
  let conversionCntList: number[] = [];
  testData.map((x) => {
    conversionCntList.push(x.k_Trans);
  });

  let options = {
    xaxis: {
      categories: keywordList,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
  };
  let series = [
    {
      name: "키워드 별 클릭 수",
      data: clickCntList,
    },
    {
      name: "키워드 별 전환 수",
      data: conversionCntList,
    },
  ];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        width="1000px"
        height="300"
      ></Chart>
    </div>
  );
};

export default AdChart;
