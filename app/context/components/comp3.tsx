import { useContext } from "react";
import { Contexto } from "../page";

export const Componente3 = () => {
  const { message } = useContext(Contexto);

  return <div>Componente3: {message}</div>;
};
