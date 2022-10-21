import { useEffect, useState } from "react";

import styles from "./adFilter.module.scss";
import DatePicker from "../../../elements/datePicker/DatePicker";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";
import { useProductQuery } from "./useProductQuery";
import { useDate } from "../../prodReport/prodContainer/useDate";
import { DataType, PropsType } from "./adFilter.type";

const AdFilter = (props: PropsType) => {
  const [selected, setSelected] = useState<string>(null);
  const [selectedDate, setSelectedDate] = useState<string>(null);

  const todayDate = useDate();
  const result = useProductQuery(todayDate);
  let productData = result.data?.data.products;

  useEffect(() => {
    props.setProductNumber(selected && selected.slice(-13));
    props.setDate(selectedDate);
  }, [selected, selectedDate]);

  let productList: string[] = [];
  productData &&
    productData.map((item: DataType) => {
      productList.push(`${item.p_Name} / ${item.p_No}`);
    });

  return (
    <div className={styles.filterWrapper}>
      <DatePicker setSelectedDate={setSelectedDate} />
      <MediumDropdown
        id={"adReport"}
        placeholder={"상품"}
        itemList={productList}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default AdFilter;
