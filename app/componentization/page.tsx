"use client";
import { useState } from "react";
import { useDataService } from "./functions/use-data-service";
import Link from "next/link";
import { BsArrowDownUp } from "react-icons/bs";
import { FaArrowDownWideShort } from "react-icons/fa6";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { Module } from "./types/module";
import { Section } from "./types/section";
import { IoMdCloseCircle } from "react-icons/io";

export default function Page() {
  const [ordering, setOrdering] = useState<"asc" | "desc" | "default">(
    "default"
  );
  const [open, setOpen] = useState<boolean>(false);
  const [notifications, setNotifications] = useState(
    useDataService("/notifications")
  );

  const totalNotifications = (
    notifications: ReturnType<typeof useDataService>
  ) => {
    return notifications
      .flatMap((section) =>
        section.modules.map((deadlines) => deadlines.data.length)
      )
      .reduce((acc, iter) => acc + iter);
  };

  if (!open) {
    return (
      <div className="relative p-5">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md bg-gray-50 text-xl border px-2 py-1 font-medium shadow-md "
        >
          Notifications
        </button>
        <div className="bg-green-600 text-sm absolute top-1.5 left-36 text-white px-2 py-0.5 font-medium w-fit rounded-full">
          {totalNotifications(notifications)}
        </div>
      </div>
    );
  }

  const sectionTotal = (section: Section) => {
    return section.modules
      .map((module) => module.data.length)
      .reduce((acc, iter) => acc + iter);
  };

  const moduleTotal = (module: Module) => {
    return module.data.length;
  };

  const handleSectionDisplay = (section: string) => {
    switch (section) {
      case "closeToExpiration":
        return "Perto de vencer";
      case "expired":
        return "Vencido";
      case "expiringToday":
        return "Vence hoje";
    }
  };

  const orderDeadlines = (order: "asc" | "desc") => {
    const notification = [...notifications];
    notification.map((sections, i) =>
      sections.modules.map((_, j) =>
        order === "asc"
          ? notification[i].modules[j].data.sort(
              (a, b) => a.dateToExpire.getTime() - b.dateToExpire.getTime()
            )
          : notification[i].modules[j].data.sort(
              (a, b) => b.dateToExpire.getTime() - a.dateToExpire.getTime()
            )
      )
    );
    setNotifications(notification);
  };

  const handleOrder = () => {
    setOrdering(ordering === "asc" ? "desc" : "asc");
    orderDeadlines(ordering === "asc" ? "desc" : "asc");
  };

  return (
    open && (
      <div className="rounded-md bg-gray-50 border shadow-md fixed w-[33%] h-[70%] py-2 m-5">
        <div className="text-lg px-3 flex items-center justify-between mb-2">
          <IoMdCloseCircle
            onClick={() => setOpen(!open)}
            className="text-green-600 hover:cursor-pointer font-bold"
            size={30}
          />
          <button onClick={handleOrder} className="mr-3">
            {ordering === "default" && <BsArrowDownUp />}
            {ordering === "desc" && <FaArrowDownWideShort />}
            {ordering === "asc" && <FaArrowUpShortWide />}
          </button>
        </div>
        <div className="overflow-hidden h-[90%] overflow-y-auto px-1">
          {notifications.map((section) => (
            <div key={section.section} className="p-2 mb-2">
              <div className="flex w-full justify-between px-2 py-1">
                <h1 className="text-2xl font-bold">
                  {handleSectionDisplay(section.section)}
                </h1>
                <h1 className="bg-green-600 rounded-full w-fit pt-1 px-3 text-white">
                  {sectionTotal(section)}
                </h1>
              </div>
              <div className="pt-2 border-t flex flex-col gap-y-2">
                {section.modules.map((modulo) => (
                  <div
                    key={modulo.module}
                    className="border rounded-md m-1 p-1 shadow-md hover:scale-105 duration-300"
                  >
                    <Link href={`/sistema/application/${modulo.module}/index`}>
                      <div className="flex w-full justify-between px-2 py-1">
                        <h1 className="font-semibold text-lg">
                          {modulo.module}
                        </h1>
                        <h1 className="font-semibold text-lg">
                          {moduleTotal(modulo)}
                        </h1>
                      </div>
                    </Link>
                    <div className="pt-2">
                      {modulo.data.map((deadline) => (
                        <div
                          key={deadline.nome}
                          className="flex w-full justify-between hover:font-medium duration-300 px-2 py-1"
                        >
                          <h1>{deadline.nome}</h1>
                          <h1>
                            {deadline.dateToExpire.toLocaleDateString("pt-br")}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}
