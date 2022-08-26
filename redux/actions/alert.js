import { Types } from "../Types";

export const setAlert = (data) => (dispatch) => {
  dispatch({ type: Types.SET_ALERT, payload: data });
  setTimeout(() => {
    dispatch({ type: Types.CLOSE_ALERT });
  }, data?.time);
};
