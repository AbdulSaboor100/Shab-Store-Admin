import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LayoutDrawer from "../Drawer/Drawer";
import styles from "./Layout.module.scss";
import { useRouter } from "next/router";
import Spinner from "../../components/Spinner/Spinner";
import Alerts from "../../components/Alerts/Alerts";

const Layout = ({ children, spinner }) => {
  let user = useSelector((state) => state?.auth?.user);
  let router = useRouter();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, []);

  return (
    <div className={styles.layout_container}>
      {spinner ? <Spinner /> : null}
      <Alerts />
      <LayoutDrawer user={user}>{children}</LayoutDrawer>
    </div>
  );
};

export default Layout;
