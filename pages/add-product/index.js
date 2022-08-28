import { IconButton, Typography } from "@mui/material";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Input from "../../components/Tags/Input/Input";
import TextArea from "../../components/Tags/TextArea/TextArea";
import Layout from "../../Layout/Layout/Layout";
import styles from "../../styles/products.module.scss";
import { PrimaryButton, SecondaryButton } from "../../components/Button/Button";
import Image from "../../components/Tags/Image/Image";
import Select from "../../components/Tags/Select/Select";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import { uploadFile } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { setAlert } from "../../redux/actions/alert";
import { addProduct } from "../../redux/actions/product";

const Products = () => {
  let dispatch = useDispatch();
  const selectSizes = ["Small", "Medium", "Large", "X-large"];
  const category = ["Polo Pk", "Polo Garsi", "Shab Normal", "Shab Feast"];
  let formRef = useRef();
  let [values, setValues] = useState([]);
  let [categoryVal, setCategoryVal] = useState("");
  let [colorsIndex, setColorsIndex] = useState(1);
  let [loading, setLoading] = useState(false);

  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("");
  let [image, setImage] = useState("");
  let [colors, setColors] = useState([]);
  let [color, setColor] = useState("");

  const addInputColor = () => {
    setColorsIndex(colorsIndex + 1);
    colors.push(color);
  };

  const colorsSubmitter = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  };

  const onSubmitProduct = () => {
    colors.push(color);
    let newColors = colors?.filter((item) => item);
    if (!image) {
      dispatch(
        setAlert({ type: "error", message: "Image is empty", time: 1000 })
      );
    } else if (!title) {
      dispatch(
        setAlert({ type: "error", message: "Title is empty", time: 1000 })
      );
    } else if (!description) {
      dispatch(
        setAlert({ type: "error", message: "Description is empty", time: 1000 })
      );
    } else if (!price) {
      dispatch(
        setAlert({ type: "error", message: "Price is empty", time: 1000 })
      );
    } else if (!categoryVal) {
      dispatch(
        setAlert({ type: "error", message: "Category is empty", time: 1000 })
      );
    } else if (!newColors[0]) {
      dispatch(
        setAlert({ type: "error", message: "Color is empty", time: 1000 })
      );
    } else if (!values[0]) {
      dispatch(
        setAlert({ type: "error", message: "Sizes is empty", time: 1000 })
      );
    } else {
      let productData = {
        title,
        description,
        price,
        image,
        colors: newColors,
        sizes: values,
        category: categoryVal,
      };
      dispatch(
        addProduct(
          productData,
          setLoading,
          setTitle,
          setDescription,
          setPrice,
          setImage,
          setValues,
          setCategoryVal,
          formRef?.current?.childNodes
        )
      );
    }
  };

  return (
    <Layout spinner={loading}>
      <div className={styles.products_container}>
        <div className={styles.product_header}>
          <Typography variant="h2">Add Products</Typography>
          <div className={styles.btn_container}>
            <PrimaryButton onClick={onSubmitProduct} type="submit">
              <UploadIcon /> Product
            </PrimaryButton>
          </div>
        </div>
        <div className={styles.product}>
          <Image
            className="flex items-center gap-4"
            isUploaded={image ? true : false}
            onChange={async (e) => {
              let file = await dispatch(
                uploadFile(e?.target?.files[0], setLoading)
              );
              setImage(file);
            }}
          />
          <Input
            className="my-4"
            label={"Title"}
            value={title}
            onChange={(e) => setTitle(e?.target?.value)}
          />
          <TextArea
            placeholder={"Description"}
            name="description"
            value={description}
            onChange={(e) => setDescription(e?.target?.value)}
          />
          <Input
            className="mt-4"
            label={"Price"}
            type="number"
            value={price}
            onChange={(e) => setPrice(e?.target?.value)}
          />
          <Select
            multiple
            data={selectSizes}
            label={"Sizes"}
            setValues={setValues}
            values={values}
            className="mt-4"
          />
          <Select
            data={category}
            label={"Category"}
            setValues={setCategoryVal}
            values={categoryVal}
            className="mt-4"
          />
          <div className="my-4">
            <form onChange={colorsSubmitter} ref={formRef}>
              {Array(colorsIndex)
                ?.fill()
                ?.map((item, index) => (
                  <Fragment key={index}>
                    <Input label={`Colors ${index + 1}`} className="mb-4" />
                  </Fragment>
                ))}
            </form>
            <div className={styles.icon_container}>
              <IconButton
                onClick={addInputColor}
                className={`${styles.icon} secondaryColor mt-4`}
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
