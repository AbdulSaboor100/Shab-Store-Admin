import React from "react";
import styles from "./Input.module.scss";
import TextField from "@mui/material/TextField";

const Input = ({ ...rest }) => {
  return (
    <div className={styles.input_container}>
      <TextField id="outlined-basic" variant="outlined" fullWidth {...rest} />
    </div>
  );
};

export default Input;
