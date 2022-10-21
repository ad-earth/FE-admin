import { useState } from "react";

import styles from "./prodContainer.module.scss";
import ProdReportTable from "../../tables/prodReportTable/ProdReportTable";
import ProdFilter from "../prodFilter/ProdFilter";
import { useSalesQuery } from "./useSalesQuery";

const ProdContainer = () => {
  const [category, setCategory] = useState<string>(null);
  const [date, setDate] = useState<string>(null);

  // axios GET 보고서 데이터 조회
  const salesData = useSalesQuery(category, date);

  return (
    <div className={styles.tableContainer}>
      <ProdFilter setCategory={setCategory} setDate={setDate} />
      <div className={styles.salesSummary}>
        상품 총 수량: <span>{salesData.data?.data.cnt} 개</span>
        &nbsp;&nbsp;&nbsp;&nbsp;전체 판매 금액:
        <span>
          {salesData && salesData.data?.data.totalPrice.toLocaleString()} 원
        </span>
      </div>
      <ProdReportTable productData={salesData.data?.data.products} />
    </div>
  );
};

export default ProdContainer;
