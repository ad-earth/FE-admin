import React, { useState, SetStateAction, Dispatch, useEffect } from "react";

import Switch from "./switch /Switch";

interface List {
  id: number;
  p_Category: string;
  p_Name: string;
  p_No: number;
  p_Status: boolean;
}

const selectList = [
  "No",
  "상품번호",
  "카테고리",
  "상품명",
  "상품on/off",
  "상품수정",
];

const SetProdTabel = ({
  prodList,
  checkedItems,
  setCheckedItems,
}: {
  prodList: List[];
  checkedItems: number[];
  setCheckedItems: Dispatch<SetStateAction<number[]>>;
}) => {
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
  // console.log(checkedItems);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                value={0}
                onChange={(e) => {
                  changeHandler(e.target.checked, Number(e.target.value));
                }}
              />
            </th>
            {selectList.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        {prodList && (
          <tbody>
            {prodList.map((item, i) => {
              return (
                <tr key={i}>
                  <td>
                    <input
                      value={item.p_No}
                      type="checkBox"
                      checked={checkedItems.includes(item.p_No) ? true : false}
                      onChange={(e) => {
                        changeHandler(e.target.checked, Number(e.target.value));
                      }}
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
        )}
      </table>
    </>
  );
};

export default SetProdTabel;
