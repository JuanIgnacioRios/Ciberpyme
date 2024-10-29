import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

interface Props {
  to: string;
}

export default function LinkButton({ children, to }: PropsWithChildren<Props>) {
  return (
    <Link
      className="bg-primary py-2 px-4 rounded-md hover:bg-primary/80 w-fit"
      to={to}
    >
      {children}
    </Link>
  );
}
