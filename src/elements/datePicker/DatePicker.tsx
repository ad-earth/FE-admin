import { useEffect, useState } from "react";

import styles from "./datePicker.module.scss";
import arrowRight from "../../assets/lcon/arrowRight.svg";
import { useRecoilState } from "recoil";
import {
  selectedEndDateState,
  selectedStartDateState,
} from "../../store/filter";
import { useMinDate } from "./useMinDate";
import { useToday } from "./useToday";

const DatePicker = () => {
  const [selectedStartDate, setSelectedStartDate] = useRecoilState(
    selectedStartDateState
  );
  const [selectedEndDate, setSelectedEndDate] =
    useRecoilState(selectedEndDateState);
  const minDate = useMinDate();
  const today = useToday();

  const onStartChange = (e: any) => {
    setSelectedStartDate(e.target.value);
    setSelectedEndDate(e.target.value);
  };
  const onEndChange = (e: any) => {
    setSelectedEndDate(e.target.value);
  };
  return (
    <div id={styles.dateBox}>
      <input
        type="date"
        id={styles.start}
        value={selectedStartDate}
        min={minDate}
        max={selectedEndDate}
        onChange={onStartChange}
      ></input>
      <img src={arrowRight} alt="arrowIcon" className={styles.icon} />
      <input
        className={styles.date}
        type="date"
        id={styles.end}
        value={selectedEndDate}
        min={selectedStartDate}
        max={today}
        onChange={onEndChange}
      ></input>
    </div>
  );
};
export default DatePicker;
