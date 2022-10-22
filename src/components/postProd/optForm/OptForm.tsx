import styles from "./optForm.module.scss";
import { useState } from "react";
import { Input200 } from "../../../elements/inputs/Inputs";
import { OptType } from "./optForm.type";
import { SmallBlueBtn } from "../../../elements/buttons/Buttons";

const OptForm = () => {
  const [colorCheck, setColorCheck] = useState(false);
  const [optCheck, setOptCheck] = useState(false);
  const [color, setColor] = useState<string>();
  const [option, setOption] = useState<string>();
  const [optionPrice, setOptionPrice] = useState<string>();
  const [optionCnt, setOptionCnt] = useState<string>();
  const [optList, setOptList] = useState([
    {
      id: 1,
      colorCheck: false,
      optCheck: false,
      color: "",
      colorCode: "",
      option: "",
      optionPrice: 0,
      optionCnt: 0,
    },
  ]);

  // 새로운 옵션 리스트 생성
  const addOptList = () => {
    const newOption = {
      id: optList.length + 1,
      colorCheck: false,
      optCheck: false,
      color: "",
      colorCode: "",
      option: "",
      optionPrice: 0,
      optionCnt: 0,
    };
    setOptList([...optList, newOption]);
  };

  // 개별 옵션 리스트 삭제
  const removeOptList = (id: number) => {
    setOptList(optList.filter((el) => el.id !== id));
  };

  // 색상 입력 여부
  const handleColorCheck = (checked: boolean, name: string) => {
    setColorCheck(!colorCheck);
    const findIndex = optList.findIndex((el) => el.id == Number(name));
    if (findIndex != -1) {
      optList[findIndex] = { ...optList[findIndex], colorCheck: checked };
    }
    setOptList(optList);
  };

  // 옵션 입력 여부
  const handleOptCheck = (checked: boolean, name: string) => {
    setOptCheck(!optCheck);
    const findIndex = optList.findIndex((el) => el.id == Number(name));
    if (findIndex != -1) {
      optList[findIndex] = { ...optList[findIndex], optCheck: checked };
    }
    setOptList(optList);
  };

  // 컬러피커 색상 선택시 함수
  const handleColorChange = (value: string, name: string) => {
    const findIndex = optList.findIndex((el) => el.id == Number(name));
    if (findIndex != -1) {
      optList[findIndex] = { ...optList[findIndex], colorCode: value };
    }
  };

  // 색상 입력
  const handleSetColor = (value: string, name: string) => {
    const findIndex = optList.findIndex((el) => el.id == Number(name));
    if (findIndex != -1) {
      optList[findIndex] = { ...optList[findIndex], color: value };
    }
    setOptList(optList);
  };

  // 옵션 입력
  const handleSetOption = (value: string, name: string) => {
    const findIndex = optList.findIndex((el) => el.id == Number(name));
    if (findIndex != -1) {
      optList[findIndex] = { ...optList[findIndex], option: value };
    }
    setOptList(optList);
  };

  // 추가 금액 입력
  const handleSetPrice = (value: string, name: string) => {
    const findIndex = optList.findIndex((el) => el.id == Number(name));
    if (findIndex != -1) {
      optList[findIndex] = {
        ...optList[findIndex],
        optionPrice: Number(value),
      };
    }
    setOptList(optList);
  };

  // 수량 입력
  const handleSetOptCnt = (value: string, name: string) => {
    const findIndex = optList.findIndex((el) => el.id == Number(name));
    if (findIndex != -1) {
      optList[findIndex] = { ...optList[findIndex], optionCnt: Number(value) };
    }
    setOptList(optList);
  };

  return (
    <div className={styles.optContainer}>
      {optList.map((item, idx) => (
        <div className={styles.optWrap} key={idx}>
          <div className={styles.optTitleWrap}>
            {/* 색상 입력 여부 체크 */}
            <input
              type="checkbox"
              checked={item.colorCheck ? true : false}
              name={String(item.id)}
              onChange={(e) =>
                handleColorCheck(e.target.checked, e.target.name)
              }
            />
            <p className={styles.optTitle}>색상 사용</p>
            {/* 옵션 입력 여부 체크 */}
            <input
              type="checkbox"
              checked={item.optCheck ? true : false}
              name={String(item.id)}
              onChange={(e) => handleOptCheck(e.target.checked, e.target.name)}
            />
            <p className={`${styles.optTitle} ${styles.size1}`}>옵션</p>
            <p className={`${styles.optTitle} ${styles.size2}`}>추가금액</p>
            <p className={`${styles.optTitle} ${styles.size1}`}>수량</p>
          </div>

          {/* 옵션 입력 (색상/색상코드/옵션내용/추가금액/수량) */}
          <div className={styles.optInputWrap}>
            <Input200
              placeholder={"색상 입력"}
              disabled={!item.colorCheck == true ? true : false}
              value={color}
              name={String(item.id)}
              onChange={(e) => {
                handleSetColor(e.target.value, e.target.name);
              }}
            />
            <input
              className={styles.colorPic}
              type="color"
              defaultValue="#ffffff"
              name={String(item.id)}
              onChange={(e) => handleColorChange(e.target.value, e.target.name)}
            />
            <Input200
              placeholder={"옵션 내용"}
              disabled={!item.optCheck == true ? true : false}
              value={option}
              name={String(item.id)}
              onChange={(e) => {
                handleSetOption(e.target.value, e.target.name);
              }}
            />
            <Input200
              placeholder={"0"}
              value={optionPrice}
              name={String(item.id)}
              onChange={(e) => {
                handleSetPrice(e.target.value, e.target.name);
              }}
            />
            <Input200
              placeholder={"0(필수)"}
              value={optionCnt}
              name={String(item.id)}
              onChange={(e) => {
                handleSetOptCnt(e.target.value, e.target.name);
              }}
            />
            <p className={styles.del} onClick={() => removeOptList(item.id)}>
              삭제
            </p>
          </div>
        </div>
      ))}
      <SmallBlueBtn onClick={addOptList}>옵션 추가</SmallBlueBtn>
    </div>
  );
};

export default OptForm;
