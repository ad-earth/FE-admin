import { useState } from "react";
import styles from "./datePicker.module.scss";
import arrowRight from "../../assets/lcon/arrowRight.svg";

const DatePicker = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const minMonth = "0" + (date.getMonth() - 3);
  const day = ("0" + date.getDate()).slice(-2);
  //최소일자 ,최대일자 , 현재일자
  const min = year + "-" + minMonth + "-" + day;
  const max = year + "-" + month + "-" + day;
  const dateStr = year + "-" + month + "-" + day;

  //현재 일자
  const [startVal, setStartVal] = useState(dateStr);
  const [endVal, setEndVal] = useState(dateStr);
  const [disabled, setDisabled] = useState(true);

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
