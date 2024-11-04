import React, { useEffect, useState } from "react";
import { IActionState } from "../../store/slices/diagnosticSlice";
import useDiagnostic from "../../hooks/useDiagnostic";
import { cn } from "../../utils/className";

interface Props {
  action: IActionState;
  index: number;
}

export default function Action({ action, index }: Props) {
  const { actionList, updateDiagnostic } = useDiagnostic();
  const [completed, setCompleted] = useState(action.completed);

  useEffect(() => {
    const newActionList = actionList.acciones.map((accion) => {
      if (accion.id === action.id) {
        return {
          ...accion,
          completed,
        };
      }
      return accion;
    });

    updateDiagnostic({
      actionList: {
        ...actionList,
        acciones: newActionList,
      },
    });
  }, [completed]);

  return (
    <div
      className={cn(
        "text-left mb-2 border-2 p-4 rounded-lg transition-colors",
        action.completed ? "bg-gray-100 text-gray-500" : ""
      )}
    >
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="w-5 h-5"
          id={`action-${action.id}`}
          onChange={(e) => setCompleted(e.target.checked)}
          checked={completed}
        />
        <label
          className={cn("font-bold", action.completed && "line-through")}
          htmlFor={`action-${action.id}`}
        >
          {index + 1}. {action.titulo}
        </label>
      </div>
      <p>{action.descripcion}</p>
    </div>
  );
}
