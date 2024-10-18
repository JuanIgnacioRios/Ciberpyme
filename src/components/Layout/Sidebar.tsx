import React from "react";

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
  return (
    <aside className="bg-secondary flex flex-col gap-4 items-start p-4 pl-0">
      {SIDEBAR_OPTIONS.map(({ label, path }) => (
        <a
          href={path}
          key={path}
          className="px-4 py-2 text-white bg-primary w-full text-left rounded-r-full hover:opacity-90"
        >
          {label}
        </a>
      ))}
    </aside>
  );
}
