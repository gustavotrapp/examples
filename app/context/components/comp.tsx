import React, { useContext } from "react";
import { Contexto } from "../page";

export const Componente = ({ children }: { children: React.ReactNode }) => {
  const { message } = useContext(Contexto);

  return (
    <div className="flex flex-col">
      Componente: {message}
      <div>{children}</div>
    </div>
  );
};
