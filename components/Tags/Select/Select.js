import React from "react";
import styles from "./Select.module.scss";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MUISelect from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, values, theme) {
  return {
    fontWeight:
      values.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Select = ({ data, className, label, setValues, values, ...rest }) => {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if (!rest?.multiple) {
      setValues(value);
    } else {
      setValues(typeof value === "string" ? value.split(",") : value);
    }
  };
  return (
    <div className={styles.select_container}>
      <FormControl fullWidth className={className}>
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <MUISelect
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={values}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
          {...rest}
        >
          {data.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, values, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </MUISelect>
      </FormControl>
    </div>
  );
};

export default Select;
