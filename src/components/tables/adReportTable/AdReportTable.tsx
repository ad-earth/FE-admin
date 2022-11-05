import styles from "./adReportTable.module.scss";
import { PropsType } from "./adReportTable.type";

const AdReportTable = (props: PropsType) => {
  const tableHeaders = [
    "NO",
    "키워드",
    "클릭 수",
    "평균 클릭 비용",
    "총 광고비",
    "총 전환 수",
    "전환율",
    "판매금액",
    "수익율",
  ];
  return (
    <table className={styles.tableContainer}>
      <thead className={styles.tHead}>
        <tr>
          {tableHeaders.map((x, idx) => {
            return (
              <th key={idx} className={styles.th}>
                {x}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={styles.tBody}>
        {props.dataList && props.dataList.length ? (
          props.dataList.map((x, idx) => {
            return (
              <tr key={x.keyword} className={styles.tr}>
                <td className={styles.td}>{idx + 1}</td>
                <td className={styles.td}>{x.keyword}</td>
                <td className={styles.td}>{x.k_Click}</td>
                <td className={styles.td}>
                  {Math.round(x.k_Cost / x.k_Click).toLocaleString()}원
                </td>
                <td className={styles.td}>{x.k_Cost.toLocaleString()}원</td>
                <td className={styles.td}>{x.k_Trans}</td>
                <td className={styles.td}>
                  {Math.round((x.k_Trans / x.k_Click) * 100)}%
                </td>
                <td className={styles.td}>{x.p_Price.toLocaleString()}원</td>
                <td className={styles.td}>
                  {Math.round((x.p_Price / x.k_Cost) * 100)}%
                </td>
              </tr>
            );
          })
        ) : (
          <tr className={styles.tr}>
            <td className={`${styles.td} ${styles.hidden}`}>0</td>
            <td className={`${styles.td} ${styles.hidden}`}>0000000</td>
            <td className={`${styles.td} ${styles.hidden}`}>000</td>
            <td className={`${styles.td} ${styles.hidden}`}>0000000</td>
            <td className={styles.td}>등록된 상품이 없습니다.</td>
            <td className={`${styles.td} ${styles.hidden}`}>000</td>
            <td className={`${styles.td} ${styles.hidden}`}>000</td>
            <td className={`${styles.td} ${styles.hidden}`}>00000000원</td>
            <td className={`${styles.td} ${styles.hidden}`}>0000000</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default AdReportTable;
