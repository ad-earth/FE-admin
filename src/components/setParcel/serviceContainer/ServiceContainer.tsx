import Pagination from "@mui/material/Pagination";
import { CSVLink } from "react-csv";

import styles from "./serviceContainer.module.scss";
import { ReactComponent as Download } from "../../../assets/lcon/download.svg";
import ServiceTable from "../../tables/serviceTable/ServiceTable";
import SearchBar from "../searchBar/SearchBar";
import { useExcel } from "./useExcel";
import { SmallGrayBtn } from "../../../elements/buttons/Buttons";

const ServiceContainer = () => {
  const data = useExcel();
  const headers = [
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
  return (
    <div>
      <div className={styles.tableContainer}>
        <SearchBar />
        <div className={styles.buttonWrapper}>
          <SmallGrayBtn>주문확정</SmallGrayBtn>
          <button className={styles.download}>
            <CSVLink
              headers={headers}
              data={data}
              filename="order_list.csv"
              target="_blank"
            >
              <Download style={{ marginRight: "7px" }} />
              파일 내려받기
            </CSVLink>
          </button>
        </div>
        <ServiceTable />
        <div className={styles.pagination}>
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
