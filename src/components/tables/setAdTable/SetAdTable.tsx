import { useState, useEffect } from "react";
import { SetStateAction, Dispatch } from "react";
import useModal from "../../modal/useModal";
import { useSetRecoilState } from "recoil";
import { prodAdState } from "../../../store/prodAd";
import styles from "./setAdTable.module.scss";
import { SmallBlueBtn } from "../../../elements/buttons/Buttons";
import { useNavigate } from "react-router-dom";
interface ProductList {
  id: number;
  k_No: number;
  keyword: string;
  k_Level: number;
  k_Cost: number;
  k_Click: number;
  clickCost: number;
  k_Status: boolean;
}
interface PropsType {
  selected: string;
  prodList: ProductList[];
  checkedItems: number[];
  setCheckedItems: Dispatch<SetStateAction<number[]>>;
}

const SetAdTable = (props: PropsType) => {
  const { selected, prodList, checkedItems, setCheckedItems } = props;
  //thead 체크박스 데이터
  const [allNO, setAllNO] = useState<number[]>([]);
  useEffect(() => {
    if (prodList) setAllNO(prodList?.map((e) => e.k_No));
  }, [prodList]);

  //상품 수정 페이지 이동
  const { showModal } = useModal();
  const setProdAd = useSetRecoilState(prodAdState);

  const changProd = (e: any) => {
    const findProd = prodList[e.target.value];

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
    checked
      ? setCheckedItems(value === 0 ? allNO : [...checkedItems, value]) //체크 데이터 담기
      : setCheckedItems(
          value === 0 ? [] : checkedItems.filter((el) => el !== value)
        );
  };
  //상품이 없을 경우
  if (selected === "상품없음") {
    return (
      <div className={styles.setAdTable}>
        <table>
          <Thead changeHandler={changeHandler} />
          <SelectedNone />
        </table>
      </div>
    );
  }
  //해당 상품의 키워드가 없을경우
  if (prodList?.length === 0) {
    return (
      <div className={styles.setAdTable}>
        <table>
          <Thead changeHandler={changeHandler} />
          {prodNone}
        </table>
      </div>
    );
  }
  return (
    <div className={styles.setAdTable}>
      <table>
        <Thead changeHandler={changeHandler} />
        <tbody>
          {prodList?.map((item, i: number) => {
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
                  <button value={i} onClick={changProd}>
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

const SelectedNone = () => {
  const navigate = useNavigate();
  return (
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
  );
};
const prodNone = (
  <tbody>
    <tr>
      <td className={styles.none}>등록된 키워드가 없습니다.</td>
    </tr>
  </tbody>
);
const Thead = ({ changeHandler }: { changeHandler: any }) => {
  return (
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
  );
};
