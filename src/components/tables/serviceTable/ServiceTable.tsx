import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { CSVLink } from "react-csv";

import styles from "./serviceTable.module.scss";
import { ReactComponent as Download } from "../../../assets/lcon/download.svg";
import { SmallGrayBtn } from "../../../elements/buttons/Buttons";
import { PropsType } from "./serviceTable.type";
import { useHeaderList } from "./useHeaderList";
import { useExcelData } from "./useExcelData";
import { useExcelQuery } from "./useExcelQuery";
import { useExcelHeaderList } from "./useExcelHeaderList";
import { useOrderConfirmQuery } from "./useOrderConfirmQuery";
import { putOrderConfirm } from "../../../shared/apis/api";
import { useMutation, useQueryClient } from "react-query";

const ServiceTable = (props: PropsType) => {
  const [confirmList, setConfirmList] = useState([]);

  // 엑셀 데이터
  const headers = useExcelHeaderList();
  const { data } = useExcelQuery(
    "0",
    "0",
    props.date,
    props.product,
    props.status
  );
  const excelData = useExcelData(data?.data.list);

  // 체크박스 상태 관리
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (
    checked: boolean,
    id: number,
    orderNumber: number,
    productNumber: number
  ) => {
    if (checked) {
      setCheckItems([...checkItems, id]);
      setConfirmList([
        ...confirmList,
        { o_No: orderNumber, p_No: productNumber },
      ]);
    } else {
      // 선택 해제
      setCheckItems(checkItems.filter((el) => el !== id));
      setConfirmList(confirmList.filter((o_No) => o_No !== orderNumber));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      let idArr: number[] = [];
      let confirmList: { o_No: number; p_No: number }[] = [];
      // 전체 체크 박스 체크
      props?.orderList.forEach((el) => {
        idArr.push(el.id);
        confirmList.push({ o_No: el.o_No, p_No: el.p_No });
      });
      setCheckItems(idArr);
      setConfirmList(confirmList);
    }
    // 전체 체크 박스 체크 해제
    else {
      setCheckItems([]);
      setConfirmList([]);
    }
  };

  // 테이블 제목 리스트
  const headerList = useHeaderList();

  // 주문 확정
  const queryClient = useQueryClient();
  const { mutate } = useMutation(() => putOrderConfirm(confirmList), {
    onSuccess: () => {
      queryClient.invalidateQueries("orders");
      setConfirmList([]);
      setCheckItems([]);
    },
    onError: ({ response }) => {
      console.log(response.data.errorMessage);
      setConfirmList([]);
      setCheckItems([]);
    },
  });

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <SmallGrayBtn onClick={mutate}>주문확정</SmallGrayBtn>
        <button className={styles.download}>
          <CSVLink
            headers={headers}
            data={excelData}
            filename="order_list.csv"
            target="_blank"
          >
            <Download style={{ marginRight: "7px" }} />
            파일 내려받기
          </CSVLink>
        </button>
      </div>
      <table id="orderList" className={styles.tableContainer}>
        <thead className={styles.tHead}>
          <tr className={styles.tr}>
            <th className={styles.th}>
              <input
                type="checkbox"
                onChange={(e) => handleAllCheck(e.target.checked)}
                checked={
                  checkItems.length ===
                  (props.orderList && props.orderList.length)
                    ? true
                    : false
                }
              />
            </th>
            {headerList.map((header, idx) => {
              return <th key={idx}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody className={styles.tBody}>
          {props.orderList && props.orderList.length ? (
            props.orderList.map((x) => {
              return (
                <tr key={x.id}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        handleSingleCheck(
                          e.target.checked,
                          x.id,
                          x.o_No,
                          x.p_No
                        )
                      }
                      checked={checkItems.includes(x.id) ? true : false}
                    />
                  </td>
                  <td>{x.id}</td>
                  <td>{x.o_No}</td>
                  <td>{x.p_No}</td>
                  <td>
                    <Tooltip
                      title={x.p_Option.map((option) => {
                        return `${option[0] ? option[0] : ""}${
                          option[1] ? option[1] : ""
                        }X${option[3]}  `;
                      })}
                      arrow
                    >
                      <span>{x.p_Name}</span>
                    </Tooltip>
                  </td>
                  <td>{x.p_Cnt}</td>
                  <td>{x.u_Id}</td>
                  <td>{x.d_Name}</td>
                  <td>
                    <Tooltip
                      title={`[${x.d_Address1}]  ${x.d_Address2} ${x.d_Address3}`}
                      arrow
                    >
                      <span>{x.d_Address2}</span>
                    </Tooltip>
                  </td>
                  <td>{x.d_Phone}</td>
                  <td>{x.d_Memo}</td>
                  <td>{x.o_Date}</td>
                  <td>{x.o_Status}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceTable;
