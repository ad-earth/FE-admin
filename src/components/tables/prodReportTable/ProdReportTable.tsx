import styles from "./prodReportTable.module.scss";
import { useGetSalesQuery } from "../../prodReport/prodContainer/useGetSalesQuery";
import { useRecoilState } from "recoil";
import {
  selectedCategoryState,
  selectedEndDateState,
  selectedStartDateState,
} from "../../../store/filter";
import { PropsType } from "./prodReportTable.type";

const ProdReportTable = (props: PropsType) => {
  const tableHeaders = [
    "NO",
    "상품 번호",
    "상품 명",
    "판매 수량",
    "총 판매 금액",
  ];

  return (
    <table className={styles.tableContainer}>
      <thead className={styles.tHead}>
        <tr className={styles.tr}>
          {tableHeaders.map((header, idx) => {
            return (
              <th className={styles.th} key={idx}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={styles.tBody}>
        {props.productData?.map((x, idx) => (
          <tr className={styles.tr} key={x.p_No}>
            <td className={styles.td}>{idx + 1}</td>
            <td className={styles.td}>{x.p_No}</td>
            <td className={styles.td}>{x.p_Name}</td>
            <td className={styles.td}>{x.p_Cnt}</td>
            <td className={styles.td}>{x.p_Price.toLocaleString()}원</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProdReportTable;
