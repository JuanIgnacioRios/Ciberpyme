import React from "react";
import Button from "../../components/Buttons/Button";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import EmailItem from "../../components/capacitaciones/EmailItem";
import { Mail, MailWarning, Plus } from "lucide-react";
import usePhishing from "../../hooks/usePhishing";
import EmailStatus from "../../components/capacitaciones/EmailStatus";
import Badge from "../../components/common/Badge";
import { cn } from "../../utils/className";

export default function Phishing() {
  const [email, setEmail] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");
  const [emailListAnim] = useAutoAnimate();
  const [campaignsAnim] = useAutoAnimate();
  const { emailList, addEmail, deleteEmail, sendPhishing, previousCampaigns } =
    usePhishing();

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
    if (emailList.some((e) => e === email)) {
      setError("El email ya fue agregado");
      return;
    }
    addEmail(email);
    setEmail("");
  };

  const handleDeleteEmail = (email: string) => {
    deleteEmail(email);
  };

  const handleSendPhishing = () => {
    if (emailList.length === 0) {
      alert("No hay emails para enviar phishing");
      return;
    }
    sendPhishing();
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
            <Button onClick={handleAddEmail}>
              <Plus />
              Agregar
            </Button>
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
          {emailList.length === 0 ? (
            <p className="text-left italic">Todavía no agregaste emails</p>
          ) : (
            emailList.map((email, index) => (
              <EmailItem
                key={email}
                email={email}
                index={index}
                deleteEmail={handleDeleteEmail}
              />
            ))
          )}
        </div>
      </article>
      <article className="border-2 shadow-lg rounded-lg p-4 flex flex-col gap-2 justify-start w-full mt-4">
        <h3 className="font-bold text-xl text-secondary text-left">
          Campañas anteriores
        </h3>
        <div ref={campaignsAnim} className="flex flex-col">
          {previousCampaigns.length === 0 ? (
            <p className="text-left italic">No hay campañas anteriores</p>
          ) : (
            previousCampaigns.map((campaign, index) => (
              <div
                key={index}
                className={cn("flex flex-col py-1", index > 0 && "border-t-2")}
              >
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-lg text-secondary text-left">
                      Campaña {index + 1}
                    </h4>
                    <p className="italic">({campaign.date})</p>
                  </div>
                  <Badge variant="warning">
                    {campaign.employees.filter((e) => e.clicked).length} /{" "}
                    {campaign.employees.length} empleados hicieron click
                  </Badge>
                </div>
                <div className="flex flex-col">
                  {campaign.employees.map((email, index) => (
                    <EmailStatus
                      key={email.email}
                      email={email}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </article>
    </section>
  );
}
