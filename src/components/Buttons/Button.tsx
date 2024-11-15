import React, { PropsWithChildren } from "react";
import { cn } from "../../utils/className";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

const variants = {
  primary: "bg-primary hover:bg-primary-hover py-2 px-4 rounded-md text-white",
  secondary: "bg-white py-2 px-4 rounded-md text-black",
  danger: "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-md text-white",
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={cn(
        variants[variant],
        "hover:bg-opacity-80 disabled:bg-opacity-40 disabled:cursor-not-allowed flex gap-2 items-center",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
