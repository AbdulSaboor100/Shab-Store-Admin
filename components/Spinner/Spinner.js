import React, { Fragment, useEffect, useState } from "react";
import styles from "./Spinner.module.scss";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  outline: "none",
};

function Spinner() {
  return (
    <Fragment>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CircularProgress color="success" />
        </Box>
      </Modal>
    </Fragment>
  );
}

export default Spinner;
