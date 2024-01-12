"use client";

import { useState } from "react";
import { useDataService } from "./functions/use-data-service";
import { NotificationIcon } from "./components/notifcation-icon";
import { NotificationDropdown } from "./components/notification-dropdown";

export default function Page() {
  const [open, setOpen] = useState<boolean>(false);
  const notifications = useDataService("/notifications");

  if (!open) {
    return (
      <NotificationIcon
        notifications={notifications}
        open={open}
        setOpen={setOpen}
      />
    );
  }

  return (
    <NotificationDropdown
      notifications={notifications}
      open={open}
      setOpen={setOpen}
    />
  );
}
