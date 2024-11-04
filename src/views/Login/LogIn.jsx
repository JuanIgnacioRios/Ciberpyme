import { useState } from "react";
import "./LogIn.css";
import { USER } from "../../mocks/user";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Buttons/Button";
import useDiagnostic from "../../hooks/useDiagnostic";

export default function LogIn() {
  const [email, setEmail] = useState(USER.email);
  const [password, setPassword] = useState("123456789");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const { resetDiagnostic } = useDiagnostic();

  const handleSignIn = () => {
    if (email === USER.email && password === "123456789") {
      setError("");
      signIn(USER);
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h3 className="text-3xl font-bold">Iniciar sesión</h3>
        {error && (
          <p className="bg-red-800/80 rounded-lg p-2 border-red-600">{error}</p>
        )}
        <form>
          <div className="input-container">
            <p>Email</p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <p>Contraseña</p>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="">¿Olvidaste tu contraseña?</a>
          </div>
          <Button onClick={handleSignIn} type="button">
            Iniciar sesión
          </Button>
        </form>
        <p>¿No tenés una cuenta?</p>
        <button
          className="text-accent hover:underline"
          onClick={resetDiagnostic}
        >
          Crear una cuenta
        </button>
      </div>
    </div>
  );
}
