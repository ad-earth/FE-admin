import { useState, useEffect } from "react";
import styles from "./setProdTable.module.scss";
import { PropsType } from "./setProdTable.type";
import Switch from "./switch /Switch";
import { useSetRecoilState } from "recoil";
import { prod } from "../../../store/prod"; // atom으로 만든 전역상태
import { useNavigate } from "react-router-dom";

const SetProdTabel = (props: PropsType) => {
  const { prodList, checkedItems, setCheckedItems } = props;
  const setProd = useSetRecoilState(prod);
  const navigate = useNavigate();

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
  //상품 수정 페이지 이동
  const changProd = (e: any) => {
    setProd({
      isProd: true,
      prodNumber: e.target.value,
    });
    navigate("/postProd");
  };
  return (
    <div className={styles.setProdTable}>
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
            {thList.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        {prodList && prodList.length !== 0 ? (
          <tbody>
            {prodList.map((item, i: number) => {
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
                    <button value={item.p_No} onClick={changProd}>
                      수정
                    </button>
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

const thList = [
  "No",
  "상품번호",
  "카테고리",
  "상품명",
  "상품on/off",
  "상품수정",
];
