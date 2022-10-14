import { useState } from "react";
import { SmallBlueBtn } from "../../elements/buttons/Buttons";
import { MediumDropdown } from "../../elements/dropdown/DropDown";
import SetAdTable from '../tables/setAdTable/SetAdTable';
import AdButton from "./adButton/AdButton";
import styles from "./setAdSection.module.scss";

const selectList = ["1", "2"];

const SetAdSection = () => {
  // 드롭다운 데이터
  const [selected, setSelected] = useState<string>();
  //삭제버튼 감지
  const [delhandler, setDelhandler] = useState<boolean>(false);
  //키워드 등록 버튼 감지
  const [addhandler, setAddhandler] = useState<boolean>(false);

  //조회 버튼 클릭시 상품 데이터 요청
  const selectClick = () => {};
  return (
    <div id={styles.setAd}>
      <div className={styles.searchBox}>
        <MediumDropdown
          id="dd"
          itemList={selectList}
          selected={selected}
          setSelected={setSelected}
        />
        <SmallBlueBtn onClick={selectClick}>조회</SmallBlueBtn>
      </div>
      <AdButton setDelhandler={setDelhandler} setAddhandler={setAddhandler} />
      <SetAdTable
        // prodList={list}
        // checkedItems={checkedItems}
        // setCheckedItems={setCheckedItems}
      />
    </div>
  );
};

export default SetAdSection;
