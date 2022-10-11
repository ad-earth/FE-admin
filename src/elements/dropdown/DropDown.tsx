import styles from "./dropdown.module.scss";
import { PropsType } from "./dropdown.type";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel, OutlinedInput } from "@mui/material";

const ITEM_HEIGHT = 40;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5,
      width: 200,
    },
  },
};
const MenuProps2 = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 5,
      width: 70,
    },
  },
};

// 200*40
export const MediumDropdown = (props: PropsType) => {
  return (
    <FormControl>
      <InputLabel className={styles.inputLabel} id={props.id} size="small">
        {props.placeholder}
      </InputLabel>
      <Select
        className={styles.select}
        labelId={props.id}
        value={props.selected}
        MenuProps={MenuProps}
        input={<OutlinedInput label={props.placeholder} />}
        onChange={(e: SelectChangeEvent<string>) =>
          props.setSelected && props.setSelected(e.target.value)
        }
      >
        {props.itemList.map((item, idx) => (
          <MenuItem selected className={styles.menuItem} key={idx} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

// 70*30
export const SmallDropdown = (props: PropsType) => {
  return (
    <FormControl>
      <InputLabel className={styles.inputLabel} id={props.id} size="small">
        {props.placeholder}
      </InputLabel>
      <Select
        className={styles.smallSelect}
        labelId={props.id}
        value={props.selected}
        MenuProps={MenuProps2}
        input={<OutlinedInput label={props.placeholder} />}
        onChange={(e: SelectChangeEvent<string>) =>
          props.setSelected && props.setSelected(e.target.value)
        }
      >
        {props.itemList.map((item, idx) => (
          <MenuItem selected className={styles.menuItem} key={idx} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
