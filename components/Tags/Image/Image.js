import React, { Fragment } from "react";
import IconButton from "@mui/material/IconButton";
import styles from "./Image.module.scss";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const Image = ({ className, ...rest }) => {
  return (
    <div className={styles.image_tag_container}>
      {rest.isUploaded ? (
        <div className={styles.isUploaded_container}>
          <Typography variant="body1">Image Uploaded</Typography>
          <CheckIcon />
        </div>
      ) : (
        <div className={className}>
          <Typography variant="body1">Upload Image {"-"}</Typography>
          <IconButton variant="contained" component="label">
            <UploadFileIcon />
            <input hidden accept="image/*" type="file" {...rest} />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Image;
