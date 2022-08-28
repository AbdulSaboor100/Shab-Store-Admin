import { Grid, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import Layout from "../../Layout/Layout/Layout";
import styles from "../../styles/products.module.scss";
import { SecondaryButton } from "../../components/Button/Button";
import { navigator } from "../../functions/functions";
import { useRouter } from "next/router";
import Product from "../../components/Product/Product";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import ProductTable from "../../components/Table/ProductTable/ProductTable";

const Products = () => {
  let router = useRouter();
  let product = useSelector((state) => state?.product);
  let [loading, setLoading] = useState(false);

  return (
    <Layout spinner={!product?.success} secondaryLoader={loading}>
      <div className={styles.products_container}>
        <div className={styles.product_header}>
          <Typography variant="h2">Products</Typography>
          <div className={styles.btn_container}>
            <SecondaryButton onClick={() => navigator(router, "/add-product")}>
              Add Product
            </SecondaryButton>
          </div>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <ProductTable data={product?.products} setLoading={setLoading} />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Products;
