import { useEffect, useMemo, useState } from "react";
import { AllMediumDropdown } from "../../../elements/dropdown/DropDown";
import { useAdProductsQuery } from "./useAdProductsQuery";
import styles from "./adFilter.module.scss";
import { PropsType } from "./adFilter.type";

const AdFilter = ({ setFilterData }: PropsType) => {
  const [selected, setSelected] = useState<number | null>();
  const [selectList, setSelectList] = useState<any>([
    { p_Name: "상품없음", p_No: 0 },
  ]);
  const { data: dropDownResponse, isLoading } = useAdProductsQuery();

  const dropDownData = useMemo(() => {
    return {
      data: dropDownResponse?.data.productList,
      length: dropDownResponse?.data.productList.length,
    };
  }, [dropDownResponse]);

  useEffect(() => {
    if (!dropDownData) return;
    if (dropDownData.length > 0) {
      !selected && setSelected(dropDownData.data[0].p_No); //기존 드롭다운 데이터 유지
      setSelectList(dropDownData.data);
    }
  }, [dropDownData]);

  useEffect(() => {
    if (selected) {
      const findName = dropDownData?.data.find(
        (x) => x.p_No === selected
      ).p_Name;
      setFilterData({ p_Name: findName, p_No: selected });
    } else setFilterData({ p_Name: "상품없음", p_No: null });
  }, [selected]);

  return (
    <div className={styles.adFilter}>
      {isLoading || !dropDownResponse ? (
        <>Loading...</>
      ) : (
        <AllMediumDropdown
          list={selectList}
          selected={selected ? selected : 0}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};

export default AdFilter;
