import React from "react";
import Button from "../../components/Buttons/Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import EmailItem from "../../components/capacitaciones/EmailItem";
import { Mail, MailWarning } from "lucide-react";
import { IPhishingEmail } from "../../types/email";
import { EMAILS } from "../../mocks/emails";

export default function Phishing() {
  const [emails, setEmails] = React.useState<IPhishingEmail[]>(EMAILS);
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [emailListAnim] = useAutoAnimate();

  const handleValueChange = (value) => {
    setError("");
    setEmail(value);
  };

  const handleAddEmail = () => {
    // comprobar que es un email valido
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("El email no es válido");
      return;
    }
    if (emails.some((e) => e.email === email)) {
      setError("El email ya fue agregado");
      return;
    }
    const newEmail = {
      email,
      sent: false,
      clicked: false,
    };
    setEmails([...emails, newEmail]);
    setEmail("");
  };

  const handleDeleteEmail = (email: string) => {
    setEmails(emails.filter((e) => e.email !== email));
  };

  const handleSendPhishing = () => {
    // enviar el phishing
    setEmails(emails.map((e) => ({ ...e, sent: true, clicked: false }))); // marcar todos como enviados
  };

  return (
    <section className="text-black w-full h-full flex flex-col items-start p-4">
      <h2 className="font-bold text-3xl text-secondary">Phishing</h2>
      <article className="w-full flex flex-col items-start gap-4 mt-4">
        <div className="flex gap-2 items-start w-full border-2 shadow-lg rounded-lg p-4 justify-between">
          <div className="flex gap-2 items-start">
            <div className="flex flex-col items-start gap-1">
              <input
                className="bg-white border-2 rounded-md py-2 px-4 h-10"
                placeholder="Agregar email"
                onChange={(e) => handleValueChange(e.target.value)}
                value={email}
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <Button onClick={handleAddEmail}>Agregar</Button>
          </div>
          <div className="flex gap-2">
            <Button disabled>
              <Mail />
              Importar emails
            </Button>
            <Button onClick={handleSendPhishing} variant={"danger"}>
              <MailWarning />
              Enviar phishing
            </Button>
          </div>
        </div>
        <div
          className="border-2 shadow-lg rounded-lg w-full p-2 px-4"
          ref={emailListAnim}
        >
          <h3 className="font-bold text-lg text-secondary text-left">
            Lista de emails
          </h3>
          {emails.map((email, index) => (
            <EmailItem
              key={email.email}
              email={email}
              index={index}
              deleteEmail={handleDeleteEmail}
            />
          ))}
        </div>
      </article>
    </section>
  );
}
