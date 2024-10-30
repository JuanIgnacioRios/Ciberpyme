import React, { useMemo, useState } from "react";
import Stars from "../../components/home/Stars";
import Robot from "../../components/home/Robot";
import {
  diagnostico,
  listaDeAccion,
  MAX_SCORE,
} from "../../constants/diagnostico";
import { getStars } from "../../utils/getStars";
import Action from "../../components/home/Action";
import useDiagnostic from "../../hooks/useDiagnostic";
import LinkButton from "../../components/Buttons/LinkButton";

export default function Home() {
  const { companyName, score } = useDiagnostic();

  const stars = useMemo(() => {
    return getStars(score);
  }, [score]);

  if (score === -1) {
    return (
      <div className="flex gap-2 flex-col justify-center items-center h-full">
        <h1 className="text-black">Tenés que realizar el autodiagnóstico</h1>
        <LinkButton to="/preguntas-diagnostico">
          Realizar autodiagnóstico
        </LinkButton>
      </div>
    );
  }

  return (
    <section className="text-black w-full h-full flex flex-col items-start p-4">
      <div className="flex w-full justify-between items-start">
        <h2 className="font-bold text-3xl text-secondary">{companyName}</h2>
        <Stars stars={stars} />
      </div>
      <article className="w-full grid grid-cols-[70%,_30%] gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 items-start w-full">
            <h3 className="font-bold text-lg text-secondary">
              Diagnóstico de seguridad
            </h3>
            <div className="border-2 rounded-lg h-fit w-full justify-start p-4">
              <p className="text-left font-bold text-lg">
                Tu empresa tiene un puntaje de:{" "}
                {((score * 100) / MAX_SCORE).toFixed()}/100
              </p>
              <p className="text-left">{diagnostico[stars]}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <h3 className="font-bold text-lg text-secondary">
              Lista de acción
            </h3>
            <div className="h-fit w-full justify-start">
              {listaDeAccion?.[stars].acciones.map((accion, index) => (
                <Action key={index} action={accion} index={index} />
              ))}
            </div>
          </div>
        </div>
        <Robot />
      </article>
    </section>
  );
}
