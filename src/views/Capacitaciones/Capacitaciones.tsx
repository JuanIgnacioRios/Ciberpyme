import React from "react";
import CapacitacionButton from "../../components/capacitaciones/CapacitacionButton";
import {
  BookMarked,
  Boxes,
  Bug,
  FileLock,
  KeyRound,
  MailWarning,
  MessageCircleWarning,
} from "lucide-react";

export default function Capacitaciones() {
  return (
    <section className="text-black w-full h-full flex flex-col items-start p-4">
      <h2 className="font-bold text-3xl text-secondary">Capacitaciones</h2>
      <article className="w-full mt-4 grid grid-cols-4 gap-2">
        <CapacitacionButton
          title="Phishing"
          icon={<MailWarning />}
          to="/capacitaciones/phishing"
        />
        <CapacitacionButton
          title="Datos sensibles"
          icon={<FileLock />}
          disabled
        />
        <CapacitacionButton
          title="Respuesta a incidentes"
          icon={<MessageCircleWarning />}
          disabled
        />
        <CapacitacionButton title="Simulaciones" icon={<Boxes />} disabled />
        <CapacitacionButton
          title="Ataques ransomware"
          icon={<Bug />}
          disabled
        />
        <CapacitacionButton
          title="Robo de credenciales"
          icon={<KeyRound />}
          disabled
        />
        <CapacitacionButton
          title="Evaluaciones"
          icon={<BookMarked />}
          disabled
        />
      </article>
    </section>
  );
}
