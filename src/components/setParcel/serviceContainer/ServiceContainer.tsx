import { useMemo, useState } from "react";
import Pagination from "@mui/material/Pagination";

import styles from "./serviceContainer.module.scss";
import ServiceTable from "../../tables/serviceTable/ServiceTable";
import { useOrderListQuery } from "./useOrderListQuery";
import ParcelFilter from "../parcelFilter/ParcelFilter";

const ServiceContainer = () => {
  const [page, setPage] = useState<number>(1);
  const [date, setDate] = useState<string>(null);
  const [product, setProduct] = useState<string>("전체");
  const [status, setStatus] = useState<string>("전체");

  // 배송 리스트 조회
  const orderData = useOrderListQuery(
    String(page),
    "10",
    date,
    product === "전체" ? null : product,
    status === "전체" ? null : product
  );

  const { orderList, dataQty } = useMemo(
    () => ({
      orderList: orderData.data?.data.list,
      dataQty: orderData.data?.data.cnt,
    }),
    [orderData]
  );

  // 페이지네이션
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div>
      <div className={styles.tableContainer}>
        <ParcelFilter
          setDate={setDate}
          setProduct={setProduct}
          setStatus={setStatus}
        />
        <ServiceTable
          orderList={orderList}
          date={date}
          product={product}
          status={status}
        />
        <div className={styles.pagination}>
          <Pagination count={Math.ceil(dataQty / 10)} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
