import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IDiagnosticState {
  score: number;
  companyName: string;
  employeeCount: number;
}

const localStorageState = localStorage.getItem("diagnostic");

const initialState: IDiagnosticState = {
  score: -1,
  companyName: "",
  employeeCount: 0,
};

export const diagnosticSlice = createSlice({
  name: "diagnostic",
  initialState: localStorageState
    ? JSON.parse(localStorageState)
    : initialState,
  reducers: {
    setDiagnosticState: (_, action: PayloadAction<IDiagnosticState>) => {
      return action.payload;
    },
    resetDiagnosticState: () => {
      return initialState;
    },
  },
});

export default diagnosticSlice.reducer;

export const { setDiagnosticState, resetDiagnosticState } =
  diagnosticSlice.actions;
