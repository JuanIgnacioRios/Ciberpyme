import { useAppDispatch, useAppSelector } from "./store";
import {
  IDiagnosticState,
  resetDiagnosticState,
  setDiagnosticState,
} from "../store/slices/diagnosticSlice";
import { apiFetch } from "../api/apiFetch";

export default function useDiagnostic() {
  const diagnostic = useAppSelector((state) => state.diagnostic);
  const user = useAppSelector((state) => state.auth.currentUser);
  const dispatch = useAppDispatch();

  const { score, companyName, employeeCount, actionList } = diagnostic;

  const setDiagnostic = (value: IDiagnosticState) => {
    if (!user) return;
    apiFetch(`/diagnostic/${user.username}`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      dispatch(setDiagnosticState(value));
    });
  };

  const resetDiagnostic = (username) => {
    apiFetch(`/diagnostic/${username}`, {
      method: "DELETE",
    }).then(() => {
      dispatch(resetDiagnosticState());
    });
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
