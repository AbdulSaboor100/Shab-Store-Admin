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
import { uploadFile, userSignUpCustom } from "../../redux/actions/auth";
import Spinner from "../../components/Spinner/Spinner";
import Alerts from "../../components/Alerts/Alerts";

const Register = () => {
  let dispatch = useDispatch();
  let router = useRouter();
  let [loading, setLoading] = useState(false);
// change
  let [formData, setFormData] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  let { email, name, image, password } = formData;

  const signUp = async () => {
    if (!image) {
      dispatch(
        setAlert({
          type: "error",
          message: "Image not valid",
          time: 1000,
        })
      );
    } else if (!email) {
      dispatch(
        setAlert({
          type: "error",
          message: "Email not valid",
          time: 1000,
        })
      );
    } else if (!name) {
      dispatch(
        setAlert({
          type: "error",
          message: "Name not valid",
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
      dispatch(userSignUpCustom(formData, setLoading, router));
    }
  };

  return (
    <div className={`${styles.login_container} darkGreyColor`}>
      <Alerts />
      {loading ? <Spinner /> : null}
      <div className={styles.form_container}>
        <Typography variant="h3">Sign up for your account</Typography>
        <div className={styles.profile_picture_container}>
          <div>
            <Avatar alt="" src={image} />
          </div>
          <div>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={async (e) => {
                  let image = await dispatch(
                    uploadFile(e.target.files[0], setLoading)
                  );
                  setFormData({ ...formData, image: image });
                }}
              />
              <PhotoCamera />
            </IconButton>
          </div>
        </div>
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
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
        <div className={styles.agree_container}>
          <small>
            By signing up, I accept the Shab Store Cloud Terms of Service and
            acknowledge the Privacy Policy.
          </small>
        </div>
        <div className={styles.btn_container}>
          <PrimaryButton onClick={signUp}>Sign Up</PrimaryButton>
        </div>
        <div className={styles.magic_text}>
          <span onClick={() => router.push("/login")}>
            Already have account? Log in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
