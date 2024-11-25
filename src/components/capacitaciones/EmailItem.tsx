import React from "react";
import { cn } from "../../utils/className";
import Button from "../Buttons/Button";
import { Trash2 } from "lucide-react";

interface Props {
  email: string;
  index: number;
  deleteEmail: (email: string) => void;
}

export default function EmailItem({ email, index, deleteEmail }: Props) {
  return (
    <div
      className={cn(
        index > 0 && "border-t-2",
        "w-full py-2 grid grid-cols-2 items-center justify-items-end"
      )}
    >
      <p className="text-left w-full">
        {index + 1}. <b>{email}</b>
      </p>
      <div className="w-fit ml-2">
        <Button variant="danger" onClick={() => deleteEmail(email)}>
          <Trash2 />
          Eliminar
        </Button>
      </div>
    </div>
  );
}
