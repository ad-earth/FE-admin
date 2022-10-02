import Pagination from "@mui/material/Pagination";

import "./_prodContainer.style.scss";
import ProdReportTable from "../../tables/prodReportTable/ProdReportTable";
import "./_prodContainer.style.scss";

const ProdContainer = () => {
  return (
    <div>
      <h1>상품 보고서</h1>

      <div className="tableContainer">
        <div className="salesSummary">
          업로드 된 상품 총 수량: <span>200개</span> / 전체 판매 금액:
          <span>900,000원</span>
        </div>
        <ProdReportTable />
        <div className="pagination">
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
};

export default ProdContainer;
