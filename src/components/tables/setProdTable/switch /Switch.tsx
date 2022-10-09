import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { AntSwitch } from "./switch.style";
import useSwitch from "./useSwitch";

interface SwitchType {
  checked: boolean;
  no: number;
}
const Switch = ({ checked = false, no = 0 }: SwitchType) => {
  //hook
  const { mutate } = useSwitch();
  //스위치 감지
  const [switchData, setSwitchData] = useState<SwitchType>({
    checked: checked,
    no: no,
  });
  //스위치 토글
  const switchEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchData((prev) => ({
      ...prev,
      checked: !prev.checked,
    }));
    mutate(switchData.no);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="center"
    >
      <AntSwitch checked={switchData.checked} onChange={switchEvent} />
    </Stack>
  );
};
export default Switch;
