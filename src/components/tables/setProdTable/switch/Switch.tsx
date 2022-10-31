import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { AntSwitch } from "./switch.style";
import useSwitchQuery from "./useSwitchQuery";
import { PropsType } from "./switch.type";

const Switch = ({ status, no = 0 }: PropsType) => {
  const { mutate } = useSwitchQuery();
  const [switchData, setSwitchData] = useState(status);

  const switchEvent = () => {
    setSwitchData(!switchData);
    mutate(no);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="left"
    >
      <AntSwitch checked={switchData} onClick={switchEvent} />
    </Stack>
  );
};
export default Switch;
