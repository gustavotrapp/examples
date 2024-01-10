"use client";

import { createContext, useState } from "react";
import { Componente } from "./components/comp";
import { Componente2 } from "./components/comp2";
import { Componente3 } from "./components/comp3";

export const Contexto = createContext<{ message: string }>({
  message: "",
});

export default function Page() {
  const [message, setMessage] = useState<string>("");

  return (
    <Contexto.Provider value={{ message }}>
      <Componente>
        <Componente2>
          <Componente3 />
        </Componente2>
      </Componente>

      <div className="flex flex-col mt-12 w-[20%]">
        <label className="font-bold text-2xl">Mensagem:</label>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border rounded-md shadow-md"
        />
      </div>
    </Contexto.Provider>
  );
}
