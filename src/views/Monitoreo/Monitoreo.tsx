import React from "react";
import Stat from "../../components/monitoreo/Stat";
import { Activity, AlarmClock, Router, ShieldAlert } from "lucide-react";
import GraficoActividad from "../../components/monitoreo/GraficoActividad";
import GraficoVulnerabilidadesBloqueadas from "../../components/monitoreo/GraficoVulnerabilidadesBloqueadas";
import GraficoVulnerabilidades from "../../components/monitoreo/GraficoVulnerabilidades";
import GraficoTipoVunlerabilidades from "../../components/monitoreo/GraficoTiposVulnerabilidades";

export default function Monitoreo() {
  return (
    <section className="text-black w-full flex flex-col items-start p-4">
      <h2 className="font-bold text-3xl text-secondary">Monitoreo</h2>
      <article className="w-full mt-2 grid grid-cols-4 gap-2">
        <Stat
          title="Vulnerabilidades activas"
          stat={"120"}
          icon={<ShieldAlert />}
        />
        <Stat title="Tiempo de respuesta" stat={"24h"} icon={<AlarmClock />} />
        <Stat title="Puertos vulnerables" stat={"65%"} icon={<Router />} />
        <Stat title="Ataques recibidos" stat={"81"} icon={<Activity />} />
      </article>
      <article className="w-full mt-2 grid grid-cols-5 grid-rows-2 gap-2">
        <div className="col-span-full border-2 shadow-lg rounded-lg p-4 flex flex-col gap-2 h-full justify-start">
          <h3 className="font-bold text-xl text-secondary text-left">
            Actividad en la red
          </h3>
          <GraficoActividad />
        </div>
        <div className="border-2 shadow-lg rounded-lg p-4 flex flex-col gap-2 justify-start">
          <h3 className="font-bold text-xl text-secondary text-left">
            Vulnerabilidades bloqueadas
          </h3>
          <GraficoVulnerabilidadesBloqueadas />
        </div>
        <div className="border-2 shadow-lg rounded-lg p-4 flex flex-col gap-2 justify-start">
          <h3 className="font-bold text-xl text-secondary text-left">
            Vulnerabilidades resueltas vs no resueltas
          </h3>
          <GraficoVulnerabilidades />
        </div>
        <div className="border-2 shadow-lg rounded-lg p-4 flex flex-col gap-2 col-span-3 justify-start">
          <h3 className="font-bold text-xl text-secondary text-left">
            Tipo de vulnerabilidades
          </h3>
          <GraficoTipoVunlerabilidades />
        </div>
      </article>
    </section>
  );
}
