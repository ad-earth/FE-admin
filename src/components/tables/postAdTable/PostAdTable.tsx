import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { SmallDropdown } from "../../../elements/dropdown/DropDown";
import { Input100 } from "../../../elements/inputs/Inputs";
import styles from "./postAdTable.module.scss";

interface PropsType {
  pNo?: number | null;
  pName?: string | null;
  keyword?: string | null;
  level?: number | undefined;
  levelCost?: number;
  cost?: number | null;
  adStatus?: boolean;
}

const thList = ["키워드", "예상순위", "예상금액", "입찰가"];
const PostAdTable = ({
  initalState,
  setInitalState,
}: {
  initalState: PropsType;
  setInitalState: Dispatch<SetStateAction<PropsType>>;
}) => {
  const { level, levelCost, adStatus, keyword, cost } = initalState;
  // console.log(keyword);
  //elememt 드롭다운 감지
  const [selected, setSelected] = useState<string>();
  const [inputNum, setInputNum] = useState<number>();

  //드롭다운 데이터 업데이트
  useEffect(() => {
    selected &&
      setInitalState((prev) => ({ ...prev, level: Number(selected) }));
  }, [selected]);

  useEffect(() => {
    inputNum && setInitalState((prev) => ({ ...prev, cost: inputNum }));
  }, [inputNum]);

  return (
    <div className={styles.postAdTable}>
      <table>
        <thead>
          <tr>
            {thList.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        {keyword ? (
          <tbody>
            <tr>
              <td>{keyword}</td>
              <td>
                <SmallDropdown
                  itemList={["1", "2", "3", "4"]}
                  selected={level ? (level === 5 ? "1" : String(level)) : "1"}
                  setSelected={setSelected}
                />
              </td>
              <td>{levelCost} 원</td>
              <td>
                <Input100
                  type="number"
                  min={levelCost ? levelCost : 0}
                  placeholder={`${levelCost ? levelCost : 0}`}
                  value={String(cost ? cost : "")}
                  setInputNum={setInputNum}
                />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td className={styles.none}>
                키워드를 입력후 조회가 가능합니다.
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};
export default PostAdTable;
