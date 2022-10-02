import "./_adReportTable.style.scss";
import { testData } from "../../graphs/adChart/test";

const AdReportTable = () => {
  console.log(testData);
  const tHeadList = [
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
    <table>
      <thead>
        <tr>
          {tHeadList.map((x, idx) => {
            return <th key={idx}>{x}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {testData.map((x) => {
          return (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.keyword}</td>
              <td>{x.k_Click}</td>
              <td>{Math.round(x.k_Cost / x.k_Click).toLocaleString()}원</td>
              <td>{x.k_Cost.toLocaleString()}원</td>
              <td>{x.k_Trans}</td>
              <td>{Math.round((x.k_Trans / x.k_Click) * 100)}%</td>
              <td>{x.p_Price.toLocaleString()}원</td>
              <td>{Math.round((x.p_Price / x.k_Cost) * 100)}%</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AdReportTable;
