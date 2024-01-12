"use client";
import Link from "next/link";
import { Module } from "../types/module";
import { NotificationDeadline } from "./notification-deadline";
import { orderDeadlines } from "../functions/order-deadlines";
import { useContext } from "react";
import { OrderingContext } from "./notification-dropdown";

export const NotificationModule = ({ modulo }: { modulo: Module }) => {
  const { ordering } = useContext(OrderingContext);

  const moduleTotal = (module: Module) => {
    return module.data.length;
  };

  return (
    <div
      key={modulo.module}
      className="border rounded-md m-1 p-1 shadow-md hover:scale-105 duration-300"
    >
      <Link href={`/sistema/application/${modulo.module}/index`}>
        <div className="flex w-full justify-between px-2 py-1">
          <h1 className="font-semibold text-lg">{modulo.module}</h1>
          <h1 className="font-semibold text-lg">{moduleTotal(modulo)}</h1>
        </div>
      </Link>
      <div className="pt-2">
        {orderDeadlines(modulo.data, ordering).map((deadline, i) => (
          <NotificationDeadline deadline={deadline} key={i} />
        ))}
      </div>
    </div>
  );
};
