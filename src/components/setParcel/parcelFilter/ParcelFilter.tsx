import styles from "./parcelFilter.module.scss";
import { useRecoilState } from "recoil";
import { useGetProductsQuery } from "./useGetProductsQuery";
import {
  selectedProductState,
  selectedStatusState,
} from "../../../store/filter";
import DatePicker from "../../../elements/datePicker/DatePicker";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";

const ParcelFilter = () => {
  const [selectedProduct, setSelectedProduct] =
    useRecoilState(selectedProductState);
  const [selectedStatus, setSelectedStatus] =
    useRecoilState(selectedStatusState);

  const productList = useGetProductsQuery();

  return (
    <div className={styles.filterWrapper}>
      <DatePicker />
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
