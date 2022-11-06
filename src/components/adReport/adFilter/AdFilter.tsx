import styles from "./adFilter.module.scss";
import { useRecoilState } from "recoil";
import { useGetProductsQuery } from "./useGetProductsQuery";
import { selectedProductNumberState } from "../../../store/filter";
import DatePicker from "../../../elements/datePicker/DatePicker";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";

const AdFilter = () => {
  const productNumbers = useGetProductsQuery();
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
