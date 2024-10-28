import React from "react";
import { Link, useLocation } from "react-router-dom";

const SIDEBAR_OPTIONS = [
  {
    label: "Página principal",
    path: "/inicio",
  },
  {
    label: "Monitoreo",
    path: "/monitoreo",
  },
  {
    label: "Capacitaciones",
    path: "/capacitaciones",
  },
  {
    label: "Gestor de contraseñas",
    path: "/gestor-contrasenas",
  },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  return (
    <aside className="bg-secondary flex flex-col gap-4 items-start p-4 pl-0">
      {SIDEBAR_OPTIONS.map(({ label, path }) => (
        <Link
          to={path}
          key={path}
          className={`px-4 py-2 text-white w-full text-left rounded-r-full hover:opacity-90 transition-colors ${
            currentPath === path.split("/")[1] ? "bg-primary" : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </aside>
  );
}
