import { Types } from "../Types";

let initialState = {
  success: false,
  status: "",
  products: [],
  error: "",
};

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.ADD_PRODUCT:
      return {
        ...state,
        success: payload?.success,
        status: payload?.status,
        products: payload?.product,
      };
    case Types.ADD_PRODUCT_FAILED:
      return {
        ...state,
        success: false,
        status: "",
        products: [],
        error: payload,
      };

    default:
      return state;
  }
}
