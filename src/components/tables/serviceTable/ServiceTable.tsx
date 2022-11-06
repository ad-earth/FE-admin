import { useEffect, useMemo, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import { CSVLink } from "react-csv";
import Pagination from "@mui/material/Pagination";
import styles from "./serviceTable.module.scss";
import { ReactComponent as Download } from "../../../assets/lcon/download.svg";
import { SmallGrayBtn } from "../../../elements/buttons/Buttons";
import { useExcelData } from "./useExcelData";
import { useExcelQuery } from "./useExcelQuery";
import { useGetOrderListQuery } from "./useGetOrderListQuery";
import { useRecoilState } from "recoil";
import {
  selectedEndDateState,
  selectedProductState,
  selectedStartDateState,
  selectedStatusState,
} from "../../../store/filter";
import { OrderListType } from "./serviceTable.type";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const ServiceTable = () => {
  const [confirmList, setConfirmList] = useState([]);
  const [product, setProduct] = useRecoilState(selectedProductState);
  const [status, setStatus] = useRecoilState(selectedStatusState);
  const [startDate, setStartDate] = useRecoilState(selectedStartDateState);
  const [endDate, setEndDate] = useRecoilState(selectedEndDateState);

  const [page, setPage] = useState<number>(1);
  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, [product, status, startDate, endDate]);

  const orderListQuery = useGetOrderListQuery(
    page,
    `[${startDate},${endDate}]`,
    product === "전체" ? null : product,
    status === "전체" ? null : status
  );

  const { orderList, dataQty } = useMemo(
    () => ({
      orderList: orderListQuery.data?.data.list,
      dataQty: orderListQuery.data?.data.cnt,
    }),
    [orderListQuery]
  );

  const { data } = useExcelQuery(
    `[${startDate},${endDate}]`,
    product === "전체" ? null : product,
    status === "전체" ? null : status
  );
  const excelData = useExcelData(data?.data.list);

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleSingleCheck = (
    checked: boolean,
    id: number,
    orderNumber: number,
    productNumber: number
  ) => {
    if (checked) {
      setCheckedItems([...checkedItems, id]);
      setConfirmList([
        ...confirmList,
        { o_No: orderNumber, p_No: productNumber },
      ]);
    } else {
      setCheckedItems(checkedItems.filter((el) => el !== id));
      setConfirmList(confirmList.filter((o_No) => o_No !== orderNumber));
    }
  };

  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      let idArr: number[] = [];
      let confirmList: { o_No: number; p_No: number }[] = [];
      orderListQuery.data?.data.forEach(
        (el: { id: number; o_No: number; p_No: number }) => {
          idArr.push(el.id);
          confirmList.push({ o_No: el.o_No, p_No: el.p_No });
        }
      );
      setCheckedItems(idArr);
      setConfirmList(confirmList);
    } else {
      setCheckedItems([]);
      setConfirmList([]);
    }
  };

  return (
    <div>
      <div className={styles.buttonWrapper}>
        <SmallGrayBtn>주문확정</SmallGrayBtn>
        <button className={styles.download}>
          <CSVLink
            headers={excelHeaderList}
            data={excelData}
            filename="order_list.csv"
            target="_blank"
          >
            <Download style={{ marginRight: "7px" }} />
            파일 내려받기
          </CSVLink>
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table id="orderList">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  checked={
                    checkedItems.length === orderListQuery.data?.data.length
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
          {orderList?.length ? (
            <tbody>
              {orderList?.map((x: OrderListType) => (
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
                      checked={checkedItems.includes(x.id) ? true : false}
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

      <ThemeProvider theme={theme}>
        <Pagination
          className={styles.pagination}
          count={Math.ceil(dataQty / 10)}
          page={page}
          onChange={handlePage}
          variant="outlined"
          shape="rounded"
          color="primary"
          boundaryCount={3}
        />
      </ThemeProvider>
    </div>
  );
};

export default ServiceTable;

const theme = createTheme({
  palette: {
    primary: {
      main: "#4e60ff",
    },
  },
});
export const headerList = [
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

export const excelHeaderList = [
  { label: "주문번호", key: "orderNo" },
  { label: "상품번호", key: "prodNo" },
  { label: "상품명", key: "prodName" },
  { label: "수량", key: "prodQty" },
  { label: "아이디", key: "userId" },
  { label: "수령인", key: "userName" },
  { label: "주소", key: "address" },
  { label: "연락처", key: "phone" },
  { label: "배송메시지", key: "comment" },
  { label: "주문일자", key: "orderDate" },
  { label: "배송상태", key: "status" },
];
