import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { MediumDropdown } from "../../../elements/dropdown/DropDown";
import { SmallBlueBtn } from "../../../elements/buttons/Buttons";

const ProdFilter = ({
  setFilterData,
}: {
  setFilterData: Dispatch<SetStateAction<string>>;
}) => {
  // 드롭다운 데이터
  const [selected, setSelected] = useState<string>("전체");

  useEffect(() => {
    setFilterData(selected);
  }, [selected]);

  return (
    <MediumDropdown
      itemList={selectList}
      selected={selected}
      setSelected={setSelected}
    />
    // <SmallBlueBtn onClick={selectClick}>조회</SmallBlueBtn>
  );
};

export default ProdFilter;

//default data
const selectList = [
  "전체",
  "욕실",
  "주방",
  "음료용품",
  "식품",
  "생활",
  "화장품",
  "문구",
];
