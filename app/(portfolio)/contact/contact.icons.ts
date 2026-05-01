import type { IconType } from "react-icons";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";

export type ContactDetailLabel = "Timezone" | "Location";

export const detailIcons: Record<ContactDetailLabel, IconType> = {
  Timezone: TbClockHour4,
  Location: FaMapMarkerAlt,
};
