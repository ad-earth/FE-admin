import styles from "./prodContainer.module.scss";
import { useRecoilValue } from "recoil";
import { useGetSalesQuery } from "./useGetSalesQuery";
import {
  selectedCategoryState,
  selectedEndDateState,
  selectedStartDateState,
} from "../../../store/filter";
import ProdFilter from "../prodFilter/ProdFilter";
import ProdReportTable from "../../tables/prodReportTable/ProdReportTable";

const ProdContainer = () => {
  const startDate = useRecoilValue(selectedStartDateState);
  const endDate = useRecoilValue(selectedEndDateState);
  const category = useRecoilValue(selectedCategoryState);

  const salesQuery = useGetSalesQuery(
    category === "전체" ? null : category,
    `[${startDate},${endDate}]`
  );

  return (
    <div className={styles.tableContainer}>
      <ProdFilter />
      <div className={styles.salesSummary}>
        상품 총 수량: <span>{salesQuery.data?.data.cnt} 개</span>
        &nbsp;&nbsp;&nbsp;&nbsp;전체 판매 금액:
        <span>{salesQuery.data?.data.totalPrice.toLocaleString()} 원</span>
      </div>
      <ProdReportTable productData={salesQuery.data?.data.products} />
    </div>
  );
};

export default ProdContainer;
