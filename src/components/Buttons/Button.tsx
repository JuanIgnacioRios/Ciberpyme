import React, { PropsWithChildren } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const variants = {
  primary:
    "bg-primary hover:bg-primary/80 disabled:bg-primary/40 py-2 px-4 rounded-md text-white",
  secondary:
    "bg-white hover:bg-white/80 disabled:bg-white/40 py-2 px-4 rounded-md text-black",
};

export default function Button({
  children,
  variant = "primary",
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  );
}
