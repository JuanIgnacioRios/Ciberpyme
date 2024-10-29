import React from "react";
import { IAccion } from "../../constants/diagnostico";

interface Props {
  action: IAccion;
  index: number;
}

export default function Action({ action, index }: Props) {
  return (
    <div className="text-left mb-2 border-2 p-4 rounded-lg">
      <div className="flex gap-2 items-center">
        <input type="checkbox" className="w-4 h-4" />
        <p className="font-bold">
          {index + 1}. {action.titulo}
        </p>
      </div>
      <p>{action.descripcion}</p>
    </div>
  );
}
