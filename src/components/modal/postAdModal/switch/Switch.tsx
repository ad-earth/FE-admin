import Stack from "@mui/material/Stack";
import { AntSwitch } from "./switch.style";
import { SwitchType } from "./switch.type";

const Switch = ({ adStatus, setAdStatus }: SwitchType) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="left"
    >
      <AntSwitch checked={adStatus} onChange={() => setAdStatus(!adStatus)} />
    </Stack>
  );
};

export default Switch;
