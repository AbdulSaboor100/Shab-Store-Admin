import { Typography } from "@mui/material";
import React from "react";
import Layout from "../../Layout/Layout/Layout";
import styles from "../../styles/products.module.scss";
import { SecondaryButton } from "../../components/Button/Button";
import { navigator } from "../../functions/functions";
import { useRouter } from "next/router";

const Products = () => {
  let router = useRouter();
  return (
    <Layout>
      <div className={styles.products_container}>
        <div className={styles.product_header}>
          <Typography variant="h2">Products</Typography>
          <div className={styles.btn_container}>
            <SecondaryButton onClick={() => navigator(router, "/add-product")}>
              Add Product
            </SecondaryButton>
          </div>
        </div>
        {/* list all product here */}
      </div>
    </Layout>
  );
};

export default Products;
