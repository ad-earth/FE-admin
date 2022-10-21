import { useEffect, useState } from "react";

import styles from "./prodFilter.module.scss";
import DatePicker from "../../../elements/datePicker/DatePicker";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";
import { useCategory } from "./useCategory";
import { PropsType } from "./prodFilter.type";

const ProdFilter = (props: PropsType) => {
  const category = useCategory();
  const [selected, setSelected] = useState<string>("전체");
  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    props.setCategory(selected === "전체" ? null : selected);
    props.setDate(selectedDate);
  }, [selected, selectedDate]);

  return (
    <div className={styles.filterWrapper}>
      <DatePicker setSelectedDate={setSelectedDate} />
      <MediumDropdown
        id={"salesReport"}
        placeholder={"카테고리"}
        itemList={category}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default ProdFilter;
