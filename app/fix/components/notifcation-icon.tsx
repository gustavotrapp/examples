"use client";
import { Dispatch, SetStateAction } from "react";
import { useDataService } from "../functions/use-data-service";

type NotificationIconProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  notifications: ReturnType<typeof useDataService>;
};

export const NotificationIcon = ({
  notifications,
  open,
  setOpen,
}: NotificationIconProps) => {
  const totalNotifications = () => {
    return notifications
      .flatMap((section) =>
        section.modules.map((deadlines) => deadlines.data.length)
      )
      .reduce((acc, iter) => acc + iter);
  };

  return (
    <div className="relative p-5">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-md bg-gray-50 text-xl border px-2 py-1 font-medium shadow-md "
      >
        Notifications
      </button>
      <div className="bg-green-600 text-sm absolute top-1.5 left-36 text-white px-2 py-0.5 font-medium w-fit rounded-full">
        {totalNotifications()}
      </div>
    </div>
  );
};
