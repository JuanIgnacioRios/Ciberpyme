import React from "react";
import { cn } from "../../utils/className";
import { IPhishingEmail } from "../../types/email";
import Badge from "../common/Badge";

interface Props {
  email: IPhishingEmail;
  index: number;
}

export default function EmailStatus({ email, index }: Props) {
  const { email: address, clicked } = email;
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
        {
          <Badge variant={clicked ? "danger" : "success"}>
            {clicked ? "Hizo click" : "Todavía no hizo click"}
          </Badge>
        }
      </div>
    </div>
  );
}
