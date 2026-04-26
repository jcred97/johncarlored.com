import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";

import type { ContactDetail, SocialLink } from "./contact.data";

export const detailIcons: Record<ContactDetail["label"], IconType> = {
  Timezone: TbClockHour4,
  Location: FaMapMarkerAlt,
};

export const socialIcons: Record<SocialLink["label"], IconType> = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Email: FaEnvelope,
};
