import { useState, useEffect } from "react";
import { SetStateAction, Dispatch } from "react";
import useModal from "../../modal/useModal";
import { useSetRecoilState } from "recoil";
import { prodAdState } from "../../../store/prodAd";
import styles from "./setAdTable.module.scss";
import { SmallBlueBtn } from "../../../elements/buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { useAdProd } from "../../setAd/setAdSection/useAdProd";
interface Prod {
  id: number;
  k_No: number;
  keyword: string;
  k_Level: number;
  k_Cost: number;
  k_Click: number;
  clickCost: number;
  k_Status: boolean;
}
interface ProdList {
  cnt: number;
  keywordList?: Prod[];
}
interface PropsType {
  prodList?: ProdList;
  type?: string;
  checkedItems?: number[];
  setCheckedItems?: Dispatch<SetStateAction<number[]>>;
}

const SetAdTable = ({
  prodList,
  type,
  checkedItems,
  setCheckedItems,
}: PropsType) => {
  const navigate = useNavigate();
  const keywordList = prodList?.keywordList;
  //상품 수정 모달
  const { showModal } = useModal();
  const setProdAd = useSetRecoilState(prodAdState);
  const isAllCheck: boolean = checkedItems.length === prodList.cnt;
  const changeProd = (e: any) => {
    const findProd = keywordList[e.target.value];
    showModal({
      modalType: "PostAdModal",
      modalProps: {
        title: "광고수정",
      },
    });
    //광고수정
    setProdAd({
      keyword: findProd.keyword,
      level: findProd.k_Level,
      cost: findProd.k_Cost,
      adStatus: findProd.k_Status,
    });
  };
  const changeHandler = (checked: boolean, value: number) => {
    if (checked) {
      value === 0
        ? setCheckedItems(keywordList.map((e) => e.k_No))
        : setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(
        value === 0 ? [] : checkedItems.filter((el) => el !== value)
      );
    }
  };

  //상품이 없을 경우
  if (type === "none") {
    return (
      <div className={styles.setAdTable}>
        <table>
          <Thead changeHandler={changeHandler} isAllCheck={isAllCheck} />
          <tbody>
            <tr>
              <td className={styles.none}>
                <p> 제품을 등록해 보세요.</p>
                <SmallBlueBtn onClick={() => navigate("/postProd")}>
                  상품 등록
                </SmallBlueBtn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  //해당 상품의 키워드가 없을경우
  if (prodList.cnt === 0) {
    return (
      <div className={styles.setAdTable}>
        <table>
          <Thead changeHandler={changeHandler} isAllCheck={isAllCheck} />
          <tbody>
            <tr>
              <td className={styles.none}>등록된 키워드가 없습니다.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div className={styles.setAdTable}>
      <table>
        <Thead changeHandler={changeHandler} isAllCheck={isAllCheck} />
        <tbody>
          {prodList.keywordList.map((item, i: number) => {
            return (
              <tr key={i}>
                <td>
                  <input
                    id="check"
                    value={item.k_No}
                    type="checkbox"
                    checked={checkedItems.includes(item.k_No) ? true : false}
                    onChange={(e) =>
                      changeHandler(e.target.checked, Number(e.target.value))
                    }
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.keyword}</td>
                <td>{item.k_Level === 5 ? "-" : item.k_Level}</td>
                <td>{item.k_Cost}</td>
                <td>{item.k_Click}</td>
                <td>{item.clickCost}</td>
                <td>{item.k_Status ? "true" : "false"}</td>
                <td>
                  <button value={i} onClick={changeProd}>
                    수정
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SetAdTable;

const thList = [
  "No",
  "키워드",
  "현재순위",
  "입찰가",
  "순위별 클릭 수 ",
  "순위별 총 광고비 ",
  "노출 상태",
  "광고 수정",
];

// 테이블 목록
const Thead = ({
  changeHandler,
  isAllCheck,
}: {
  changeHandler: any;
  isAllCheck: boolean;
}) => {
  return (
    <thead>
      <tr>
        <th>
          <input
            type="checkbox"
            value={0}
            checked={isAllCheck}
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
  );
};
