"use client";
import { Deadline } from "../types/deadline";

export const NotificationDeadline = ({ deadline }: { deadline: Deadline }) => {
  return (
    <div
      key={deadline.nome}
      className="flex w-full justify-between hover:font-medium duration-300 px-2 py-1"
    >
      <h1>{deadline.nome}</h1>
      <h1>{deadline.dateToExpire.toLocaleDateString("pt-br")}</h1>
    </div>
  );
};
