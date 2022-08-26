import { styled } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";

export const PrimaryButton = styled(MuiButton)((props) => ({
  fontWeight: 600,
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  padding: "10px 20px",
  background: "#503AE7",
  color: "#FFFFFF",
  textAlign: "center",
  border: "none",
  textTransform: "initial",
  "&:hover": {
    background: "#3E2DB2",
  },
}));

export const SecondaryButton = styled(MuiButton)((props) => ({
  background: "none",
  fontWeight: 600,
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  padding: "10px 20px",
  color: "#14142B",
  border: "2px solid #14142B",
  textAlign: "center",
  textTransform: "initial",
  "&:hover": {
    color: "#1AD993",
    border: "2px solid #1AD993",
  },
}));

export const MusicButton = styled(MuiButton)((props) => ({
  background: "none",
  fontWeight: 600,
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  padding: "10px 20px",
  color: "#503AE7",
  border: "none",
  textAlign: "center",
  textTransform: "initial",
  "&:hover": {
    color: "#3E2DB2",
  },
}));

export const RadiButton = styled(MuiButton)((props) => ({
  fontWeight: 600,
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  padding: "10px 20px",
  background: "#503AE7",
  borderRadius: "28.5px",
  color: "#FFFFFF",
  textAlign: "center",
  border: "none",
  textTransform: "initial",
  "&:hover": {
    background: "#3E2DB2",
  },
}));

export const LightRadiButton = styled(MuiButton)((props) => ({
  fontWeight: 600,
  fontFamily: "Inter",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",
  padding: "10px 20px",
  background: "none",
  borderRadius: "28.5px",
  color: "#AFB0B9",
  textAlign: "center",
  border: "1px solid #AFB0B9",
  textTransform: "initial",
  "&:hover": {},
}));
