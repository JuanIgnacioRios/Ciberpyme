import { useState } from "react";
import questions from "../../assets/questions.json";
import "./DiagnosticQuestions.css";
import { useNavigate } from "react-router-dom";
import useDiagnostic from "../../hooks/useDiagnostic";
import Button from "../../components/Buttons/Button";

const DiagnosticQuestions = () => {
  const { setDiagnostic } = useDiagnostic();
  const questions1 = questions.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [companyName, setCompanyName] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex === 0 && companyName === "") {
      alert("Por favor, ingresa el nombre de tu empresa.");
      return;
    }

    if (currentQuestionIndex === 1 && employeeCount === "") {
      alert("Por favor, ingresa la cantidad de empleados.");
      return;
    }

    if (
      currentQuestionIndex >= 2 &&
      !selectedAnswers[questions1[currentQuestionIndex - 2].id]
    ) {
      alert("Por favor, selecciona una respuesta antes de continuar.");
      return;
    }

    if (currentQuestionIndex < questions1.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let score = 0;

    Object.keys(selectedAnswers).forEach((questionId) => {
      const questionIndex = parseInt(questionId) - 1;
      const answerId = selectedAnswers[questionId];

      if (questionIndex >= 2) {
        const question = questions1[questionIndex];
        const answer = question.respuestas.find((resp) => resp.id === answerId);

        if (answer) {
          score += answer.puntos;
        }
      }
    });

    return score;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setDiagnostic({
      companyName,
      employeeCount,
      score,
    });
    navigate("/");
  };

  const handleStart = () => {
    setShowIntro(false);
  };

  const isAnswerSelected =
    currentQuestionIndex >= 2 &&
    !!selectedAnswers[questions1[currentQuestionIndex - 2].id];
  const progressPercentage =
    (currentQuestionIndex / (questions1.length - 1)) * 100;

  return (
    <div id="diagnostic-questions-container">
      <div id="form-container">
        {showIntro ? (
          <div className="intro-section">
            <h3>Diagnóstico Inicial de Ciberseguridad</h3>
            <p>
              En esta sección, te guiaremos paso a paso para realizar un
              diagnóstico rápido y efectivo de la ciberseguridad de tu PyME. El
              proceso consta de varias preguntas simples que nos permitirán
              evaluar el estado actual de la protección de tus datos,
              dispositivos y redes.
              <br />
              <br />
              A medida que avances, recibirás recomendaciones personalizadas
              para fortalecer la seguridad de tu empresa y mitigar posibles
              vulnerabilidades. Este diagnóstico es el primer paso para asegurar
              que tu negocio esté preparado frente a las crecientes amenazas
              digitales.
              <br />
              <br />
              ¡Comencemos con el análisis y llevemos la seguridad de tu PyME al
              siguiente nivel!
            </p>
            <div>
              <Button onClick={handleStart}>Comenzar</Button>
            </div>
          </div>
        ) : (
          <section className="diagnostic-section">
            {/* Barra de hitos con progreso */}
            <div className="milestones-bar">
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              {questions1.map((_, index) => (
                <div
                  key={index}
                  className={`milestone-circle ${
                    index <= currentQuestionIndex ? "active" : ""
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>

            {currentQuestionIndex === 0 ? (
              <div>
                <h3>¿Cuál es el nombre de tu empresa?</h3>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => {
                    handleAnswerSelect(
                      questions1[currentQuestionIndex].id,
                      e.target.value
                    ),
                      setCompanyName(e.target.value);
                  }}
                  placeholder="Ingresa el nombre de la empresa"
                />
              </div>
            ) : currentQuestionIndex === 1 ? (
              <div>
                <h3>¿Cuántos empleados son en {companyName}?</h3>
                <input
                  type="number"
                  value={employeeCount}
                  onChange={(e) => {
                    handleAnswerSelect(
                      questions1[currentQuestionIndex].id,
                      e.target.value
                    ),
                      setEmployeeCount(e.target.value);
                  }}
                  placeholder="Ingresa la cantidad de empleados"
                />
              </div>
            ) : (
              <div>
                <h3>{questions1[currentQuestionIndex].pregunta}</h3>
                <form className="flex flex-col gap-2 text-left">
                  {questions1[currentQuestionIndex].respuestas.map(
                    (respuesta) => (
                      <div
                        className="bg-white rounded-lg p-4 text-black flex justify-start gap-2 items-center"
                        key={respuesta.id}
                      >
                        <input
                          id={respuesta.id}
                          type="radio"
                          className="w-4 h-4"
                          name={`respuesta-${questions1[currentQuestionIndex].id}`}
                          value={respuesta.id}
                          checked={
                            selectedAnswers[
                              questions1[currentQuestionIndex].id
                            ] === respuesta.id
                          }
                          onChange={() =>
                            handleAnswerSelect(
                              questions1[currentQuestionIndex].id,
                              respuesta.id
                            )
                          }
                        />
                        <label htmlFor={respuesta.id}>{respuesta.texto}</label>
                      </div>
                    )
                  )}
                </form>
              </div>
            )}

            <div className="buttons-container">
              {currentQuestionIndex > 0 && (
                <Button onClick={handlePrevious} variant="secondary">
                  Volver
                </Button>
              )}
              {currentQuestionIndex === questions1.length - 1 ? (
                <Button onClick={handleSubmit} disabled={!isAnswerSelected}>
                  Finalizar
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!isAnswerSelected && currentQuestionIndex >= 2}
                >
                  Siguiente
                </Button>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default DiagnosticQuestions;
