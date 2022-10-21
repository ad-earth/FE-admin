import { useEffect, useState } from "react";

import styles from "./adFilter.module.scss";
import DatePicker from "../../../elements/datePicker/DatePicker";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";
import { useProductQuery } from "./useProductQuery";
import { PropsType } from "./adFilter.type";

const AdFilter = (props: PropsType) => {
  const productNumbers = useProductQuery();
  const [selected, setSelected] = useState<string>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    props.setProductNumber(selected);
    props.setDate(selectedDate);
  }, [selected, selectedDate]);

  return (
    <div className={styles.filterWrapper}>
      <DatePicker setSelectedDate={setSelectedDate} />
      <MediumDropdown
        id={"adReport"}
        placeholder={"상품 번호"}
        itemList={productNumbers}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default AdFilter;
