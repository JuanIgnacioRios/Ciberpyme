import React from "react";
import Button from "../Buttons/Button";

interface Props {
  title: string;
  message: string;
  onClose: () => void;
  buttonText?: string;
}

export default function Modal({
  title,
  message,
  onClose,
  buttonText = "Entendido",
}: Props) {
  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-black bg-opacity-50 flex items-center justify-center animate-reveal">
      <div className="bg-white rounded-xl shadow-md p-16 flex items-center justify-center flex-col gap-4">
        <h2 className="text-5xl font-bold">{title}</h2>
        <p className="text-wrap w-96">{message}</p>
        <Button onClick={onClose}>{buttonText}</Button>
      </div>
    </div>
  );
}
