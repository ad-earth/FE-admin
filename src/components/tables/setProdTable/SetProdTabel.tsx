import { useState, useEffect } from "react";
import styles from "./setProdTabel.module.scss";
import { PropsType } from "./setProdTabel.type";
import Switch from "./switch /Switch";

const SetProdTabel = (props: PropsType) => {
  const { prodList, checkedItems, setCheckedItems } = props;

  //thead 체크박스 데이터
  const [allNO, setAllNO] = useState<number[]>([]);
  useEffect(() => {
    if (prodList) setAllNO(prodList?.map((e) => e.p_No));
  }, [prodList]);

  const changeHandler = (checked: boolean, value: number) => {
    checked
      ? setCheckedItems(value === 0 ? allNO : [...checkedItems, value]) //체크 데이터 담기
      : setCheckedItems(
          value === 0 ? [] : checkedItems.filter((el) => el !== value)
        ); //체크해제
  };
  return (
    <div className={styles.setProdTabel}>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                value={0}
                onChange={(e) =>
                  changeHandler(e.target.checked, Number(e.target.value))
                }
              />
            </th>
            {selectList.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        {/* <tbody> */}
        {prodList && prodList.length !== 0 ? (
          <tbody>
            {prodList.map((item: any, i: number) => {
              return (
                <tr key={i}>
                  <td>
                    <input
                      id="check"
                      value={item.p_No}
                      type="checkbox"
                      checked={checkedItems.includes(item.p_No) ? true : false}
                      onChange={(e) =>
                        changeHandler(e.target.checked, Number(e.target.value))
                      }
                    />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.p_No}</td>
                  <td>{item.p_Category}</td>
                  <td>{item.p_Name}</td>
                  <td>
                    <Switch checked={item.p_Status} no={item.p_No} />
                  </td>
                  <td>
                    <span>수정</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td className={styles.none}>등록된 상품이 없습니다.</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default SetProdTabel;

const selectList = [
  "No",
  "상품번호",
  "카테고리",
  "상품명",
  "상품on/off",
  "상품수정",
];
