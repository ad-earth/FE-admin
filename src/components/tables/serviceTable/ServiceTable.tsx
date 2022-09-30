import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";

import "./_serviceTable.style.scss";
import { testData } from "./test";

const ServiceTable = () => {
  // 체크박스 상태 관리
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked: boolean, id: number) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
    } else {
      // 선택 해제
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      let idArr: number[] = [];
      // 전체 체크 박스 체크
      testData.forEach((el) => idArr.push(el.id));
      setCheckItems(idArr);
    }
    // 전체 체크 박스 체크 해제
    else {
      setCheckItems([]);
    }
  };

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
        <tr>
          <th>
            <input
              type="checkbox"
              onChange={(e) => handleAllCheck(e.target.checked)}
              checked={checkItems.length === testData.length ? true : false}
            />
          </th>
          {tHeadList.map((x, idx) => {
            return <th key={idx}>{x}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {testData.map((x) => {
          return (
            <tr key={x.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => handleSingleCheck(e.target.checked, x.id)}
                  checked={checkItems.includes(x.id) ? true : false}
                />
              </td>
              <td>{x.id}</td>
              <td>{x.o_No}</td>
              <td>{x.p_No}</td>
              <td>
                <Tooltip title={x.p_Name} arrow>
                  <span>{x.p_Name}</span>
                </Tooltip>
              </td>
              <td>{x.p_Cnt}</td>
              <td>{x.u_Id}</td>
              <td>{x.d_Name}</td>
              <td>
                <Tooltip title={x.d_Address1 + x.d_Address2} arrow>
                  <span>{x.d_Address1}</span>
                </Tooltip>
              </td>
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
