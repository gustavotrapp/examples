"use client";

import { useState } from "react";

export default function Home() {
  const [total, setTotal] = useState<number>(0);

  return (
    <main className="flex flex-col text-3xl">
      <h1 className="text-5xl mb-5">Exemplo:</h1>
      <div className="flex flex-col p-2">
        <label className={total % 2 == 0 ? "text-green-600" : "text-red-600"}>
          Total: {total} (esse número e {total % 2 == 0 ? "par" : "ímpar"})
        </label>
        <div className="mt-6 flex gap-x-2">
          <button
            onClick={() => setTotal(total + 1)}
            className="border shadow-md rounded-full px-2 text-center items-center bg-gray-50 text-black"
          >
            +
          </button>
          <button
            onClick={() => setTotal(total - 1)}
            className="border shadow-md rounded-full px-2.5 text-center items-center bg-gray-50 text-black"
          >
            -
          </button>
        </div>
      </div>
    </main>
  );
}
