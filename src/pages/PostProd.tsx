import { useState } from "react";
import { MediumDropdown } from "../elements/dropdown/DropDown";
import styles from "./styles/postProd.module.scss";

// 드롭다운 테스트 데이터
const names = [
  "dkadddd",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const PostProd = () => {
  // 드롭다운 defaultValue는 useState에 담기는 배열 첫번째 값으로 직접 넣어줌
  const [selected, setSelected] = useState(names[0]);

  return (
    <div className={styles.container}>
      <MediumDropdown
        itemList={names}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default PostProd;
