import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";

export type ContactDetailLabel = "Timezone" | "Location";
export type SocialLinkLabel = "LinkedIn" | "GitHub" | "Email";

export const detailIcons: Record<ContactDetailLabel, IconType> = {
  Timezone: TbClockHour4,
  Location: FaMapMarkerAlt,
};

export const socialIcons: Record<SocialLinkLabel, IconType> = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Email: FaEnvelope,
};
