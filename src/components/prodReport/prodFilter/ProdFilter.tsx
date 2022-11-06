import styles from "./prodFilter.module.scss";
import { useRecoilState } from "recoil";
import { selectedCategoryState } from "../../../store/filter";
import DatePicker from "../../../elements/datePicker/DatePicker";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";

const ProdFilter = () => {
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  return (
    <div className={styles.filterWrapper}>
      <DatePicker />
      <MediumDropdown
        id={"salesReport"}
        placeholder={"카테고리"}
        itemList={[
          "전체",
          "욕실",
          "주방",
          "음료용품",
          "생활",
          "식품",
          "화장품",
          "문구",
        ]}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
      />
    </div>
  );
};

export default ProdFilter;
