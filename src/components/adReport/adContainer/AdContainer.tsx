import Pagination from "@mui/material/Pagination";

import AdChart from "../../graphs/adChart/AdChart";
import AdReportTable from "../../tables/adReportTable/AdReportTable";
import "./_adContainer.style.scss";

const AdContainer = () => {
  return (
    <div>
      <h1>광고 보고서</h1>
      <div className="chartContainer">
        <div className="chart">
          <h3>3개월 간 광고 키워드 클릭 수 & 전환 수</h3>
          <AdChart />
        </div>
        <AdReportTable />
        <div className="pagination">
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
};

export default AdContainer;
