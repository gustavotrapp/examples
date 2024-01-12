import { Deadline } from "../types/deadline";
import { useDataService } from "./use-data-service";

export const orderDeadlines = (
  deadlines: Deadline[],
  order: "asc" | "desc" | "default"
) => {
  switch (order) {
    case "asc":
      return deadlines.sort(
        (a, b) => a.dateToExpire.getTime() - b.dateToExpire.getTime()
      );
    case "desc":
      return deadlines.sort(
        (a, b) => b.dateToExpire.getTime() - a.dateToExpire.getTime()
      );
    case "default":
      return deadlines;
  }
};
