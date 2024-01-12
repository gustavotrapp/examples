"use client";
import { Section } from "../types/section";
import { NotificationModule } from "./notfication-module";

export const NotificationSection = ({ section }: { section: Section }) => {
  const sectionTotal = (section: Section) => {
    return section.modules
      .map((module) => module.data.length)
      .reduce((acc, iter) => acc + iter);
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
  return (
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
        {section.modules.map((module, i) => (
          <NotificationModule modulo={module} key={i} />
        ))}
      </div>
    </div>
  );
};
