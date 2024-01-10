import React, { useContext } from "react";
import { Contexto } from "../page";

export const Componente2 = ({ children }: { children: React.ReactNode }) => {
  const { message } = useContext(Contexto);

  return (
    <div className="flex flex-col">
      Componente2: {message}
      <div>{children}</div>
    </div>
  );
};
