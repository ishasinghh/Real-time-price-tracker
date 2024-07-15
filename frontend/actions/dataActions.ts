import axios from "axios";
import { AppDispatch } from "../store";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from "../reducers/dataReducer";

export const fetchData = (symbol: string) => async (dispatch: AppDispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await axios.get(
      `http://localhost:3000/v1/price/${symbol}`
    );
    dispatch(fetchDataSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchDataFailure(error.toString()));
  }
};
