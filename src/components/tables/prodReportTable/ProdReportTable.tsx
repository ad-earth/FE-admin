import { testData } from "./test";
import "./_prodReportTable.style.scss";

const ProdReportTable = () => {
  const tHeadList = ["NO", "상품 번호", "상품 명", "판매 수량", "총 판매 금액"];
  return (
    <table>
      <thead>
        <tr>
          {tHeadList.map((x, idx) => {
            return <th key={idx}>{x}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {testData.map((x, idx) => {
          return (
            <tr key={x.p_No}>
              <td>{idx + 1}</td>
              <td>{x.p_No}</td>
              <td>{x.p_Name}</td>
              <td>{x.p_Cnt}</td>
              <td>{x.p_Price.toLocaleString()}원</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProdReportTable;
