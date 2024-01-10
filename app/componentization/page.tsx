"use client";
import { useState } from "react";
import { useDataService } from "./functions/use-data-service";
import Link from "next/link";

export default function Page() {
  const [open, setOpen] = useState<boolean>(false);
  const notifications = useDataService("/notifications");

  if (!open) {
    return (
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md bg-gray-50 border px-2 py-1 font-medium shadow-md "
      >
        Notifications
      </button>
    );
  }

  return (
    open && (
      <div className="rounded-md bg-gray-50 border shadow-md ">
        {Object.entries(notifications).map(([status, modules]) => (
          <div key={status} className="p-2 mb-2">
            <h1 className="text-2xl font-bold">{status}</h1>
            <div className="pt-2 border-t">
              {Object.entries(modules).map(([modulo, data]) => (
                <div
                  key={modulo}
                  className="border rounded-md m-1 p-1 shadow-md"
                >
                  <Link href={`/sistema/application/${modulo}/index`}>
                    <h1>{modulo}</h1>
                  </Link>
                  <div className="pt-2">
                    {data.map(({ nome, dateToExpire }) => (
                      <div key={nome} className="flex">
                        <h1>{nome}</h1> - <h1>{dateToExpire.toDateString()}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  );
}
