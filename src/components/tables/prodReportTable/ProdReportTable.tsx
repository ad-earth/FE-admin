import { PropsType } from "./prodReportTable.type";
import styles from "./prodReportTable.module.scss";

const ProdReportTable = (props: PropsType) => {
  const tHeadList = ["NO", "상품 번호", "상품 명", "판매 수량", "총 판매 금액"];

  return (
    <table className={styles.tableContainer}>
      <thead className={styles.tHead}>
        <tr className={styles.tr}>
          {tHeadList.map((header, idx) => {
            return (
              <th className={styles.th} key={idx}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className={styles.tBody}>
        {props.productData && props.productData.length ? (
          props.productData.map((x, idx) => {
            return (
              <tr className={styles.tr} key={x.p_No}>
                <td className={styles.td}>{idx + 1}</td>
                <td className={styles.td}>{x.p_No}</td>
                <td className={styles.td}>{x.p_Name}</td>
                <td className={styles.td}>{x.p_Cnt}</td>
                <td className={styles.td}>{x.p_Price.toLocaleString()}원</td>
              </tr>
            );
          })
        ) : (
          <tr className={styles.tr}>
            <td className={`${styles.td} ${styles.hidden}`}>0</td>
            <td className={`${styles.td} ${styles.hidden}`}>0000000000000</td>
            <td className={styles.td}>등록된 상품이 없습니다.</td>
            <td className={`${styles.td} ${styles.hidden}`}>0</td>
            <td className={`${styles.td} ${styles.hidden}`}>00000원</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProdReportTable;
