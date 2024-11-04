import { useAppDispatch, useAppSelector } from "./store";
import {
  IDiagnosticState,
  resetDiagnosticState,
  setDiagnosticState,
} from "../store/slices/diagnosticSlice";

export default function useDiagnostic() {
  const diagnostic = useAppSelector((state) => state.diagnostic);
  const dispatch = useAppDispatch();

  const { score, companyName, employeeCount, actionList } = diagnostic;

  const setDiagnostic = (value: IDiagnosticState) => {
    localStorage.setItem("diagnostic", JSON.stringify(value));
    dispatch(setDiagnosticState(value));
  };

  const resetDiagnostic = () => {
    localStorage.removeItem("diagnostic");
    dispatch(resetDiagnosticState());
  };

  const updateDiagnostic = (value: Partial<IDiagnosticState>) => {
    const newDiagnostic = { ...diagnostic, ...value };
    setDiagnostic(newDiagnostic);
  };

  return {
    actionList,
    score,
    companyName,
    employeeCount,
    setDiagnostic,
    resetDiagnostic,
    updateDiagnostic,
  };
}
