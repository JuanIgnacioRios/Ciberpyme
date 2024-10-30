import { useAppDispatch, useAppSelector } from "./store";
import {
  IDiagnosticState,
  resetDiagnosticState,
  setDiagnosticState,
} from "../store/slices/diagnosticSlice";

export default function useDiagnostic() {
  const diagnostic = useAppSelector((state) => state.diagnostic);
  const dispatch = useAppDispatch();

  const { score, companyName, employeeCount } = diagnostic;

  const setDiagnostic = (value: IDiagnosticState) => {
    localStorage.setItem("diagnostic", JSON.stringify(value));
    dispatch(setDiagnosticState(value));
  };

  const resetDiagnostic = () => {
    localStorage.removeItem("diagnostic");
    dispatch(resetDiagnosticState());
  };

  return {
    score,
    companyName,
    employeeCount,
    setDiagnostic,
    resetDiagnostic,
  };
}
