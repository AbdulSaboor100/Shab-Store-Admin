import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

const Alerts = () => {
  let alert = useSelector((state) => state.alert);

  const style = {
    position: "absolute",
    top: "10%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
  };

  if (!alert?.success) return null;

  return (
    <>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            sx={{
              width: "30%",
              zIndex: "1000",
            }}
            spacing={2}
          >
            <Alert
              variant="filled"
              severity={alert?.type}
              sx={{ fontFamily: "Montserrat" }}
            >
              {alert?.message}
            </Alert>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Alerts;
