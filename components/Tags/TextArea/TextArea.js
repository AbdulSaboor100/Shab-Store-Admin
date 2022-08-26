import React from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./TextArea.module.scss";

const TextArea = ({ ...rest }) => {
  return (
    <div className={styles.text_area_container}>
      <TextareaAutosize aria-label="empty textarea" {...rest} />
    </div>
  );
};

export default TextArea;
