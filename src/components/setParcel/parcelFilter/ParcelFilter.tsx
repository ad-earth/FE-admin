import { useEffect, useState } from "react";

import DatePicker from "../../../elements/datePicker/DatePicker";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";
import styles from "./parcelFilter.module.scss";
import { PropsType } from "./parcelFilter.type";
import { useProductQuery } from "./useProductQuery";

const ParcelFilter = (props: PropsType) => {
  const [selectedDate, setSelectedDate] = useState<string>(null);
  const [selectedProduct, setSelectedProduct] = useState<string>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>(null);

  useEffect(() => {
    props.setDate(selectedDate);
    props.setProduct(selectedProduct);
    props.setStatus(selectedStatus);
  }, [selectedDate, selectedProduct, selectedStatus]);

  const productList = useProductQuery();

  return (
    <div className={styles.filterWrapper}>
      <DatePicker setSelectedDate={setSelectedDate} />
      <MediumDropdown
        id={"parcelProducts"}
        placeholder={"상품"}
        itemList={productList}
        selected={selectedProduct}
        setSelected={setSelectedProduct}
      />
      <MediumDropdown
        id={"parcelStatus"}
        placeholder={"배송상태"}
        itemList={["전체", "신규주문", "배송완료", "주문취소"]}
        selected={selectedStatus}
        setSelected={setSelectedStatus}
      />
    </div>
  );
};

export default ParcelFilter;
