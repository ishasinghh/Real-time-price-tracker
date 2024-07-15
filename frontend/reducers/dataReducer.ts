import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  loading: boolean;
  data: any[];
  error: string | null;
}

const initialState: DataState = {
  loading: false,
  data: [],
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<any[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;

export default dataSlice.reducer;
