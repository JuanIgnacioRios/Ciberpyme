import React from "react";
import LinkButton from "../../components/Buttons/LinkButton";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>La página que buscás no existe</h1>
      <LinkButton to={"/"}>Volver al inicio</LinkButton>
    </div>
  );
}
