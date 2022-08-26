import { Types } from "../Types";

let initialState = {
  success: false,
  type: "",
  message: "",
};

export default function (state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case Types.SET_ALERT:
      return {
        ...state,
        success: true,
        type: payload.type,
        message: payload.message,
      };

    case Types.CLOSE_ALERT:
      return {
        ...state,
        success: false,
        type: "",
        message: "",
      };

    default:
      return state;
  }
}
