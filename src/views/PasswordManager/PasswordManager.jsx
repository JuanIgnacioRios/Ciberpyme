import React, { useEffect } from "react";
import Button from "../../components/Buttons/Button";
import { Copy, Eye, EyeOff, RefreshCw } from "lucide-react";
import PasswordCheck from "../../components/passwords/PasswordCheck";
import PasswordStrength from "../../components/passwords/PasswordStrength";
import { calcularSeguridad, generatePassword } from "../../utils/password";

const PasswordManager = () => {
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordChecks, setPasswordChecks] = React.useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
    patterns: false,
    score: 0,
  });

  useEffect(() => {
    setPasswordChecks(calcularSeguridad(password));
  }, [password]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    alert("Contraseña copiada al portapapeles");
  };

  return (
    <section className="text-black w-full h-full flex flex-col p-4 items-center px-24">
      <div className="flex gap-2 w-fit items-center">
        <div className="border-2 rounded-lg shadow-lg flex items-center flex-col justify-center px-10 py-14 gap-2 h-fit w-[800px]">
          <h2 className="text-4xl font-bold text-secondary">
            ¿Qué tan segura es mi contraseña?
          </h2>
          <p className="text-xl">
            Tomate un momento para comprobar si tus contraseñas son vulnerables
            a posibles ataques. No recopilamos ni almacenamos las contraseñas.
          </p>
        </div>
        <img
          src="/botcitoconsombra.png"
          alt=""
          className="w-[300px] animate-float"
        />
      </div>
      <div className="flex gap-4 w-full items-center justify-center flex-col">
        <div className="w-full relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Comprobá tu contraseña"
            className="bg-white border-2 focus:outline-none focus:ring rounded-lg shadow-lg p-4 text-4xl w-full"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="absolute right-5 top-6 flex gap-4 items-center">
            <span className="text-black text-2xl">{password.length}</span>
            <Button
              variant="secondary"
              className="p-0"
              onClick={() => setPassword(generatePassword())}
            >
              <RefreshCw />
            </Button>
            <Button variant="secondary" className="p-0" onClick={handleCopy}>
              <Copy />
            </Button>
            <Button
              variant="secondary"
              className="p-0"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </Button>
          </div>
        </div>
        <div className="border-2 flex flex-col w-full rounded-lg shadow-lg p-4 items-start">
          <PasswordStrength score={passwordChecks.score} />

          <div className="flex flex-col gap-2 mt-4 items-start">
            <p>
              Asegurate de que tu contraseña cumple con los siguientes
              requerimientos:
            </p>
            <div className="grid gap-2 grid-cols-2">
              <PasswordCheck
                label="Longitud de al menos 12 caracteres"
                isChecked={passwordChecks.length}
              />
              <PasswordCheck
                label="Al menos una minúscula"
                isChecked={passwordChecks.lowercase}
              />
              <PasswordCheck
                label="Al menos una mayúscula"
                isChecked={passwordChecks.uppercase}
              />
              <PasswordCheck
                label="Al menos un número"
                isChecked={passwordChecks.number}
              />
              <PasswordCheck
                label="Al menos un caracter especial ( ! @ # $ % ^ & * )"
                isChecked={passwordChecks.special}
              />
              <PasswordCheck
                label="No contener patrones comunes ( 123, abc, password, qwerty )"
                isChecked={!passwordChecks.patterns}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordManager;
