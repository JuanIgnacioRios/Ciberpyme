import React, { PropsWithChildren } from "react";
import { cn } from "../../utils/className";

const variants = {
  success: "bg-green-200 text-green-600",
  danger: "bg-red-200 text-red-600",
  warning: "bg-yellow-200 text-yellow-600",
};

interface Props {
  variant: keyof typeof variants;
}

export default function Badge({ variant, children }: PropsWithChildren<Props>) {
  return (
    <div className={cn(variants[variant], "px-3 rounded-full h-fit")}>
      {children}
    </div>
  );
}
