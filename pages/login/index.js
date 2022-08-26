import { Avatar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PrimaryButton } from "../../components/Button/Button";
import styles from "../../styles/login.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setAlert } from "../../redux/actions/alert";
import IconButton from "@mui/material/IconButton";
import { PhotoCamera } from "@mui/icons-material";
import {
  uploadFile,
  userSignInCustom,
  userSignUpCustom,
} from "../../redux/actions/auth";
import Spinner from "../../components/Spinner/Spinner";
import Alerts from "../../components/Alerts/Alerts";

const Login = () => {
  let dispatch = useDispatch();
  let router = useRouter();
  let [loading, setLoading] = useState(false);

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  let { email, password } = formData;

  const signIn = async () => {
    if (!email) {
      dispatch(
        setAlert({
          type: "error",
          message: "Email not valid",
          time: 1000,
        })
      );
    } else if (!password) {
      dispatch(
        setAlert({
          type: "error",
          message: "Password not valid",
          time: 1000,
        })
      );
    } else {
      dispatch(userSignInCustom(formData, setLoading, router));
    }
  };

  return (
    <div className={`${styles.login_container} darkGreyColor`}>
      <Alerts />
      {loading ? <Spinner /> : null}
      <div className={styles.form_container}>
        <Typography variant="h3">Sign In for your account</Typography>
        <div className={styles.custom_input_feild}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className={styles.custom_input_feild}>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className={styles.btn_container}>
          <PrimaryButton onClick={signIn}>Sign In</PrimaryButton>
        </div>
        <div className={styles.magic_text}>
          <span onClick={() => router.push("/register")}>
            Don't have and account, Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
