import { navLink } from "types/common";

import JournalIcon from "@assets/journal.svg";
import WorkIcon from "@assets/work.svg";
import GitHub from "@assets/rocket.svg";
import Person from "@assets/person.svg";
import Mail from "@assets/mail.svg";

export const navLinks: navLink[] = [
  { id: 1, label: "Notes", href: "/", icon: <JournalIcon /> },
  { id: 2, label: "Works", href: "/works", icon: <WorkIcon /> },
];

export const socialLinks: navLink[] = [
  {
    id: 3,
    label: "GitHub",
    href: "https://github.com/abanseka",
    icon: <GitHub />,
  },
  {
    id: 4,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abanseka-sylvester/",
    icon: <Person />,
  },
  {
    id: 5,
    label: "Gmail",
    href: "mailto:abansekasly98@gmail.com",
    icon: <Mail />,
  },
];
