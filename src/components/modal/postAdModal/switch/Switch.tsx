import { useState, SetStateAction, Dispatch } from "react";
import Stack from "@mui/material/Stack";
import { AntSwitch } from "./switch.style";

interface SwitchType {
  checked: boolean;
}
const Switch = ({
  checked,
  adStatus,
  setAdStatus,
}: {
  checked: boolean;
  adStatus: boolean;
  setAdStatus: Dispatch<SetStateAction<boolean>>;
}) => {
  //스위치 토글
  const switchEvent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAdStatus(!adStatus);

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="left"
    >
      <AntSwitch checked={adStatus} onChange={switchEvent} />
    </Stack>
  );
};

export default Switch;
