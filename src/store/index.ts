import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import diagnosticReducer from "./slices/diagnosticSlice";
import phishingReducer from "./slices/phishingSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  diagnostic: diagnosticReducer,
  phishing: phishingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
