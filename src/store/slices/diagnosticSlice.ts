import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IActionState {
  titulo: string;
  descripcion: string;
  id: number;
  completed: boolean;
}

export interface IActionListState {
  nivel: number;
  acciones: IActionState[];
}

export interface IDiagnosticState {
  email: string;
  score: number;
  companyName: string;
  employeeCount: number;
  actionList: IActionListState;
}

// const localStorageState = localStorage.getItem("diagnostic");

const initialState: IDiagnosticState = {
  email: "",
  score: -1,
  companyName: "",
  employeeCount: 0,
  actionList: {
    nivel: 0,
    acciones: [],
  },
};

export const diagnosticSlice = createSlice({
  name: "diagnostic",
  initialState: initialState,
  reducers: {
    setDiagnosticState: (_, action: PayloadAction<IDiagnosticState>) => {
      return action.payload;
    },
    resetDiagnosticState: () => {
      return initialState;
    },
    updateDiagnosticState: (
      state,
      action: PayloadAction<Partial<IDiagnosticState>>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export default diagnosticSlice.reducer;

export const {
  setDiagnosticState,
  resetDiagnosticState,
  updateDiagnosticState,
} = diagnosticSlice.actions;
