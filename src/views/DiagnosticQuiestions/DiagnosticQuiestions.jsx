import { useState } from "react";
import questions from "../../assets/questions.json";
import "./DiagnosticQuestions.css";
import Button from "../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

const DiagnosticQuestions = () => {
  const questions1 = questions.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));
  };

  const handleNext = () => {
    if (selectedAnswers[questions1[currentQuestionIndex].id]) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Por favor, selecciona una respuesta antes de continuar.");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Respuestas seleccionadas:", selectedAnswers);
    navigate("/");
  };

  const isAnswerSelected =
    !!selectedAnswers[questions1[currentQuestionIndex].id];

  const progressPercentage =
    (currentQuestionIndex / (questions1.length - 1)) * 100;

  return (
    <div id="diagnostic-questions-container">
      <section>
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

        <h3>{questions1[currentQuestionIndex].pregunta}</h3>
        <form>
          {questions1[currentQuestionIndex].respuestas.map((respuesta) => (
            <div className="answer" key={respuesta.id}>
              <input
                id={respuesta.id}
                type="radio"
                name={`respuesta-${questions1[currentQuestionIndex].id}`}
                value={respuesta.id}
                checked={
                  selectedAnswers[questions1[currentQuestionIndex].id] ===
                  respuesta.id
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
          ))}
        </form>

        <div className="buttons-container">
          {currentQuestionIndex > 0 && (
            <Button variant="secondary" onClick={handlePrevious}>
              Volver
            </Button>
          )}

          {currentQuestionIndex === questions1.length - 1 ? (
            <Button onClick={handleSubmit} disabled={!isAnswerSelected}>
              Finalizar
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={!isAnswerSelected}>
              Siguiente
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default DiagnosticQuestions;
