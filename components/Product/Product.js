import React from "react";
import styles from "./Product.module.scss";
import { Link, Typography } from "@mui/material";
import Image from "next/image";

const Product = ({ title, description, price, image, category }) => {
  return (
    <div className={styles.shop_card_container}>
      <div className={`${styles.img_container}  darkBlackColor`}>
        <Image
          src={image}
          width={400}
          height={350}
          objectFit="contain"
          alt="cart shirt for sale"
        />
      </div>
      <div className={`${styles.shop_card_content}`}>
        <Link href="#" underline="hover">
          <Typography variant="h3">{title}</Typography>
        </Link>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body1">Category: {category}</Typography>
        <div className={styles.shop_card_price}>
          <Typography variant="body1" className={styles.price_text}>
            Price
          </Typography>
          <Typography variant="body1" className={styles.price_text}>
            {price} PKR
          </Typography>
        </div>
        <div className={styles.btn_container}></div>
      </div>
    </div>
  );
};

export default Product;
