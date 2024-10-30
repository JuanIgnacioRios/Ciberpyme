import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import diagnosticReducer from "./slices/diagnosticSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  diagnostic: diagnosticReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
