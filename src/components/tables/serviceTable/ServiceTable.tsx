import "./_serviceTable.style.scss";
import { testData } from "./test";

const ServiceTable = () => {
  // 테이블 제목 리스트
  const tHeadList = [
    "No",
    "주문번호",
    "상품번호",
    "상품명",
    "수량",
    "아이디",
    "수령인",
    "주소",
    "연락처",
    "배송메시지",
    "주문일자",
    "배송상태",
  ];
  return (
    <table id="orderList">
      <thead>
        <th>
          <input type="checkbox" />
        </th>
        {tHeadList.map((x, idx) => {
          return <th>{x}</th>;
        })}
      </thead>
      <tbody>
        {testData.map((x, idx) => {
          return (
            <tr key={idx}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{x.id}</td>
              <td>{x.o_No}</td>
              <td>{x.p_No}</td>
              <td>{x.p_Name}</td>
              <td>{x.p_Cnt}</td>
              <td>{x.u_Id}</td>
              <td>{x.d_Name}</td>
              <td>{x.d_Address1 + x.d_Address2}</td>
              <td>{x.d_Phone}</td>
              <td>{x.d_Memo}</td>
              <td>{x.o_Date}</td>
              <td>{x.o_Status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ServiceTable;
