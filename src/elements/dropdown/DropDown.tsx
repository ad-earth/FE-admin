import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./dropdown.module.scss";
import { PropsType } from "./dropdown.type";

// 200*40
export const MediumDropdown = (props: PropsType) => {
  return (
    <FormControl className={styles.formControl}>
      <Select
        className={styles.select}
        onChange={(e: SelectChangeEvent<string>) =>
          props.setSelected && props.setSelected(e.target.value)
        }
        value={props.selected}
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
    <FormControl className={styles.smallFormControl}>
      <Select
        className={styles.select}
        onChange={(e: SelectChangeEvent<string>) =>
          props.setSelected && props.setSelected(e.target.value)
        }
        value={props.selected}
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
