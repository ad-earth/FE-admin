import styles from "./setProdTable.module.scss";
import { PropsType } from "./setProdTable.type";
import Switch from "./switch/Switch";
import { useSetRecoilState } from "recoil";
import { prod } from "../../../store/prod"; // atom으로 만든 전역상태
import { useNavigate } from "react-router-dom";

const SetProdTabel = (props: PropsType) => {
  const { prodList, checkedItems, setCheckedItems } = props;
  const setProd = useSetRecoilState(prod);
  const navigate = useNavigate();
  const isAllCheck = prodList
    ? prodList.length > 0 && checkedItems.length === prodList.length
    : false;

  const changeHandler = (checked: boolean, value: number) => {
    if (checked)
      setCheckedItems(
        value === 0 ? prodList.map((e) => e.p_No) : [...checkedItems, value]
      );
    else
      setCheckedItems(
        value === 0 ? [] : checkedItems.filter((el) => el !== value)
      );
  };
  //상품 수정 페이지 이동
  const changProd = (e: any) => {
    setProd({
      isProd: true,
      prodNumber: e.target.value,
    });
    navigate("/PostProd");
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
        {prodList && prodList.length !== 0 ? (
          <tbody>
            {prodList.map((item, i: number) => {
              return (
                <tr key={i}>
                  <td>
                    <input
                      id="check"
                      value={item.p_No ?? ""}
                      type="checkbox"
                      checked={checkedItems.includes(item.p_No) ? true : false}
                      onChange={(e) =>
                        changeHandler(e.target.checked, Number(e.target.value))
                      }
                    />
                  </td>
                  <td>{item.id}</td>
                  <td className={styles.hover}>
                    {item.p_Status ? (
                      <a
                        target="_blank"
                        href={`https://www.adearth.shop/detail/${item.p_No}`}
                        rel="noopener noreferer nofollow noreferrer"
                      >
                        {item.p_No}
                      </a>
                    ) : (
                      <span onClick={() => alert("노출되지 않은 상품입니다.")}>
                        {item.p_No}
                      </span>
                    )}
                  </td>
                  <td>{item.p_Category}</td>
                  <td className={styles.hover}>
                    {item.p_Status ? (
                      <a
                        target="_blank"
                        href={`https://www.adearth.shop/detail/${item.p_No}`}
                        rel="noopener noreferer nofollow noreferrer"
                      >
                        {item.p_Name}
                      </a>
                    ) : (
                      <span onClick={() => alert("노출되지 않은 상품입니다.")}>
                        {item.p_Name}
                      </span>
                    )}
                  </td>
                  <td>
                    <Switch status={item.p_Status} no={item.p_No} />
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
