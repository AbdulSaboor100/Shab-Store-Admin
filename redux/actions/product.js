import { Types } from "../Types";
import { BASE_URL } from "../../config/config";
import axios from "axios";
import { setAlert } from "./alert";

export const addProduct =
  (
    productData,
    setLoading,
    setTitle,
    setDescription,
    setPrice,
    setImage,
    setValues,
    setCategoryVal,
    nodeList
  ) =>
  async (dispatch) => {
    setLoading(true);
    try {
      let response = await axios.post(
        `${BASE_URL}/api/admin/add-product`,
        productData
      );
      dispatch(
        setAlert({
          type: "success",
          message: response?.data?.status,
          time: 1000,
        })
      );
      dispatch(getProducts());
      setLoading(false);
      setTitle("");
      setDescription("");
      setPrice("");
      setImage("");
      setValues([]);
      setCategoryVal("");
      Array.from(nodeList)?.map((item, i) => {
        console.log((item.firstChild.lastChild.firstChild.value = ""));
      });
    } catch (error) {
      setLoading(false);
      if (error?.response?.data) {
        dispatch(
          setAlert({
            type: "error",
            message: error?.response?.data?.status,
            time: 1000,
          })
        );
      } else {
        dispatch(
          setAlert({
            type: "error",
            message: error?.message,
            time: 1000,
          })
        );
      }
      console.log(error);
    }
  };

export const getProducts = () => async (dispatch) => {
  try {
    let response = await axios.get(`${BASE_URL}/api/admin/get-products`);
    dispatch({ type: Types.ADD_PRODUCT, payload: response?.data });
  } catch (error) {
    if (error?.response?.data) {
      dispatch({
        type: Types.ADD_PRODUCT_FAILED,
        payload: error?.response?.data?.status,
      });
    } else {
      dispatch({ type: Types.ADD_PRODUCT_FAILED, payload: error?.message });
    }
    console.log(error);
  }
};

export const singleProduct = (type, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    let response = await axios.get(`${BASE_URL}/api/admin/product/${type}`);
    dispatch({ type: Types.ADD_PRODUCT, payload: response?.data });
    setLoading(false);
  } catch (error) {
    setLoading(false);
    if (error?.response?.data) {
      dispatch({
        type: Types.ADD_PRODUCT_FAILED,
        payload: error?.response?.data?.status,
      });
    } else {
      dispatch({ type: Types.ADD_PRODUCT_FAILED, payload: error?.message });
    }
    console.log(error);
  }
};

export const deleteProduct = (id, setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    let response = await axios.post(
      `${BASE_URL}/api/admin/delete-product`,
      id
    );
    dispatch(getProducts());
    dispatch(
      setAlert({ type: "success", message: response?.data?.status, time: 1000 })
    );
    setLoading(false);
  } catch (error) {
    setLoading(false);
    if (error?.response?.data) {
      dispatch(
        setAlert({
          type: "error",
          message: error?.response?.data?.status,
          time: 1000,
        })
      );
    } else {
      dispatch(
        setAlert({
          type: "error",
          message: error?.message,
          time: 1000,
        })
      );
    }
    console.log(error);
  }
};
