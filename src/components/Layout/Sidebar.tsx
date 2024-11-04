import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Buttons/Button";
import useAuth from "../../hooks/useAuth";
import { Activity, Book, Home, Lock, Power } from "lucide-react";

const SIDEBAR_OPTIONS = [
  {
    label: "Página principal",
    path: "/",
    icon: <Home />,
  },
  {
    label: "Monitoreo",
    path: "/monitoreo",
    icon: <Activity />,
  },
  {
    label: "Capacitaciones",
    path: "/capacitaciones",
    icon: <Book />,
  },
  {
    label: "Gestor de contraseñas",
    path: "/gestor-contrasenas",
    icon: <Lock />,
  },
];

export default function Sidebar() {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/")[1];
  const { signOut } = useAuth();
  return (
    <aside className="bg-secondary flex flex-col gap-4 items-center p-4 pl-0 justify-between fixed left-0 top-0 pt-16 w-[280px] h-full">
      <div className="flex flex-col gap-4 items-start p-4 pl-0 w-full">
        {SIDEBAR_OPTIONS.map(({ label, path, icon }) => (
          <Link
            to={path}
            key={path}
            className={`px-4 py-2 text-white w-full text-left rounded-r-full hover:opacity-90 transition-colors ${
              currentPath === path.split("/")[1] ? "bg-primary" : ""
            }`}
          >
            <span className="flex gap-2 items-center">
              {icon}
              {label}
            </span>
          </Link>
        ))}
      </div>
      <Button onClick={signOut}>
        <span className="flex gap-2 items-center">
          <Power />
          Cerrar sesión
        </span>
      </Button>
    </aside>
  );
}
