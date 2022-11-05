import { useEffect, useState } from "react";

import styles from "./adFilter.module.scss";
import DatePicker from "../../../elements/datePicker/DatePicker";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";
import { useProductQuery } from "./useProductQuery";
import { useRecoilState } from "recoil";
import { selectedProductNumberState } from "../../../store/filter";

const AdFilter = () => {
  const productNumbers = useProductQuery();
  const [selectedProductNumber, setSelectedProductNumber] = useRecoilState(
    selectedProductNumberState
  );

  return (
    <div className={styles.filterWrapper}>
      <DatePicker />
      <MediumDropdown
        id={"adReport"}
        placeholder={"상품 번호"}
        itemList={productNumbers}
        selected={selectedProductNumber}
        setSelected={setSelectedProductNumber}
      />
    </div>
  );
};

export default AdFilter;
