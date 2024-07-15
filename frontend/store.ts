// store.ts
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataReducer"; // Adjust path as needed
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(thunk), // Make sure 'thunk' is properly imported if needed
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
