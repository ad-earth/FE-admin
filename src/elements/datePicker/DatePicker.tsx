import { useEffect, useState } from "react";

import styles from "./datePicker.module.scss";
import arrowRight from "../../assets/lcon/arrowRight.svg";
import { PropsType } from "./datePicker.type";
import { useInitialDate } from "./useInitialDate";

const DatePicker = (props: PropsType) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const minMonth = "0" + (date.getMonth() - 3);
  const day = ("0" + date.getDate()).slice(-2);

  // 최소 선택 가능 일자(4개월 전) ,최대 선택 가능 일자(당일)
  const min = year + "-" + minMonth + "-" + day;
  const max = year + "-" + month + "-" + day;

  // 초기 데이터
  const initialDate = useInitialDate();

  const [startVal, setStartVal] = useState<string>(initialDate[0]);
  const [endVal, setEndVal] = useState<string>(initialDate[1]);
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    props.setSelectedDate(`[${startVal},${endVal}]`);
  }, [startVal, endVal]);

  //시작 일자 이벤트 감지
  const onStartChange = (e: any) => {
    setStartVal(e.target.value);
    setEndVal(e.target.value);
    setDisabled(false);
  };
  const onEndChange = (e: any) => {
    setEndVal(e.target.value);
  };
  return (
    <div id={styles.dateBox}>
      <input
        type="date"
        id={styles.start}
        value={startVal}
        min={min}
        max={max}
        onChange={onStartChange}
      ></input>
      <img src={arrowRight} alt="arrowIcon" className={styles.icon} />
      <input
        className={styles.date}
        type="date"
        id={styles.end}
        value={endVal}
        min={startVal}
        max={max}
        onChange={onEndChange}
        disabled={disabled}
      ></input>
    </div>
  );
};
export default DatePicker;
