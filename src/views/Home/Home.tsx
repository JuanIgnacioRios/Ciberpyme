import React, { useEffect, useMemo } from "react";
import Stars from "../../components/home/Stars";
import Robot from "../../components/home/Robot";
import {
  diagnostico,
  listaDeAccion,
  MAX_SCORE,
} from "../../constants/diagnostico";
import { getNextLevel, getStars } from "../../utils/getStars";
import Action from "../../components/home/Action";
import useDiagnostic from "../../hooks/useDiagnostic";
import LinkButton from "../../components/Buttons/LinkButton";
import ReactConfetti from "react-confetti";
import Modal from "../../components/common/Modal";

const levelMessages = {
  2: "Subiste al nivel 2. Todavía hay mucho por mejorar, revisá tu nueva lista de accion para seguir mejorando tu nivel de seguridad.",
  3: "Subiste al nivel 3. ¡Bien hecho! No te confies, seguí trabajando en tu lista de acción para seguir mejorando tu nivel de seguridad.",
  4: "Subiste al nivel 4. ¡Excelente! Estas cada vez más cerca de conseguir el máximo nivel. Seguí trabajando en tu lista de acción.",
  5: "Subiste al nivel 5. Estás muy cerca de conseguir el máximo nivel de ciberseguridad. ¡Seguí trabajando en tu lista de acción!",
  6: "¡Felicidades! Tu empresa tiene el máximo nivel de ciberseguridad.",
};

export default function Home() {
  const { companyName, score, actionList, updateDiagnostic } = useDiagnostic();

  const stars = useMemo(() => {
    return getStars(score);
  }, [score]);

  const { allCompleted, amountCompleted } = useMemo(() => {
    const amountCompleted = actionList.acciones.filter(
      (accion) => accion.completed
    ).length;
    const allCompleted =
      amountCompleted === actionList.acciones.length && amountCompleted > 0;
    return { allCompleted, amountCompleted };
  }, [actionList]);

  useEffect(() => {
    if (allCompleted) {
    }
  }, [allCompleted]);

  const handleCloseModal = () => {
    const newScore = getNextLevel(score);
    const newStars = getStars(newScore);
    if (newStars === 6) {
      updateDiagnostic({
        score: MAX_SCORE,
        actionList: { nivel: 6, acciones: [] },
      });
      return;
    }
    const newActionList = listaDeAccion[newStars].acciones;
    updateDiagnostic({
      score: newScore,
      actionList: { nivel: newStars, acciones: newActionList },
    });
  };

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
      {allCompleted && (
        <Modal
          title={"¡Felicidades!"}
          message={levelMessages[stars + 1]}
          onClose={handleCloseModal}
        />
      )}
      {allCompleted && <ReactConfetti />}
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
              Lista de acción ({amountCompleted}/{actionList.acciones.length})
            </h3>
            <div className="h-fit w-full justify-start">
              {actionList.acciones.length > 0 ? (
                actionList.acciones.map((accion, index) => (
                  <Action key={accion.id} action={accion} index={index} />
                ))
              ) : (
                <p className="text-left italic">
                  No hay acciones en tu lista de acción.
                </p>
              )}
            </div>
          </div>
        </div>
        <Robot />
      </article>
    </section>
  );
}
