import React from "react";
import { cn } from "../../utils/className";
import Button from "../Buttons/Button";
import { Trash2 } from "lucide-react";
import { IPhishingEmail } from "../../types/email";
import Badge from "../common/Badge";

interface Props {
  email: IPhishingEmail;
  index: number;
  deleteEmail: (email: string) => void;
}

export default function EmailItem({ email, index, deleteEmail }: Props) {
  const { email: address, sent, clicked } = email;
  return (
    <div
      className={cn(
        index > 0 && "border-t-2",
        "w-full py-2 grid grid-cols-2 items-center justify-items-end"
      )}
    >
      <p className="text-left w-full">
        {index + 1}. <b>{address}</b>
      </p>
      <div className="flex gap-2 items-center">
        <Badge variant={sent ? "success" : "warning"}>
          {sent ? "Enviado" : "No enviado"}
        </Badge>
        {sent && (
          <Badge variant={clicked ? "danger" : "success"}>
            {clicked ? "Hizo click" : "Todavía no hizo click"}
          </Badge>
        )}
        <div className="w-fit ml-2">
          <Button variant="danger" onClick={() => deleteEmail(address)}>
            <Trash2 />
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
}
