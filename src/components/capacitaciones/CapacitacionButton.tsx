import React from "react";
import { cn } from "../../utils/className";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  icon: React.ReactNode;
  disabled?: boolean;
  to?: string;
}

export default function CapacitacionButton({
  title,
  icon,
  disabled,
  to = "",
}: Props) {
  return (
    <Link
      className={cn(
        "border-2 shadow-lg rounded-lg flex flex-col gap-2 p-4 items-center",
        disabled && "opacity-60 cursor-not-allowed pointer-events-none"
      )}
      to={to}
    >
      <span className="text-primary [&>svg]:h-24 [&>svg]:w-24">{icon}</span>
      <h3 className="text-xl font-bold text-secondary">{title}</h3>
    </Link>
  );
}
