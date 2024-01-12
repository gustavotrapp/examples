"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { useDataService } from "../functions/use-data-service";
import { IoMdCloseCircle } from "react-icons/io";
import { BsArrowDownUp } from "react-icons/bs";
import { FaArrowDownWideShort, FaArrowUpShortWide } from "react-icons/fa6";
import { NotificationSection } from "./notification-section";
export const OrderingContext = createContext<{
  ordering: "asc" | "desc" | "default";
}>({
  ordering: "default",
});
type NotificationDropdownProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  notifications: ReturnType<typeof useDataService>;
};

export const NotificationDropdown = ({
  notifications,
  open,
  setOpen,
}: NotificationDropdownProps) => {
  const [ordering, setOrdering] = useState<"default" | "asc" | "desc">(
    "default"
  );

  return (
    <OrderingContext.Provider value={{ ordering }}>
      <div className="rounded-md bg-gray-50 border shadow-md fixed w-[33%] h-[70%] py-2 m-5">
        <div className="text-lg px-3 flex items-center justify-between mb-2">
          <IoMdCloseCircle
            onClick={() => setOpen(!open)}
            className="text-green-600 hover:cursor-pointer font-bold"
            size={30}
          />
          <button
            onClick={() => setOrdering(ordering === "asc" ? "desc" : "asc")}
            className="mr-3"
          >
            {ordering === "default" && <BsArrowDownUp />}
            {ordering === "desc" && <FaArrowDownWideShort />}
            {ordering === "asc" && <FaArrowUpShortWide />}
          </button>
        </div>
        <div className="overflow-hidden h-[90%] overflow-y-auto px-1">
          {notifications.map((section, i) => (
            <NotificationSection section={section} key={i} />
          ))}
        </div>
      </div>
    </OrderingContext.Provider>
  );
};
