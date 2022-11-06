import styles from "./prodReportTable.module.scss";
import { PropsType } from "./prodReportTable.type";

const ProdReportTable = (props: PropsType) => {
  const headerList = [
    "NO",
    "상품 번호",
    "상품 명",
    "판매 수량",
    "총 판매 금액",
  ];

  return (
    <div className={styles.salesTable}>
      <table>
        <thead>
          <tr>
            {headerList.map((header, idx) => {
              return <th key={idx}>{header}</th>;
            })}
          </tr>
        </thead>
        {props.productData?.length ? (
          <tbody>
            {props.productData?.map((x, idx) => (
              <tr key={x.p_No}>
                <td>{idx + 1}</td>
                <td>{x.p_No}</td>
                <td>{x.p_Name}</td>
                <td>{x.p_Cnt}</td>
                <td>{x.p_Price.toLocaleString()}원</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td className={styles.noData}>해당하는 상품이 없습니다.</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ProdReportTable;
