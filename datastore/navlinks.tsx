import { navLink } from "types/common";

import JournalIcon from "@assets/journal.svg";
import ProjectIcon from "@assets/projects.svg";
import GitHub from "@assets/github.svg";
import LinkedIn from "@assets/linkedIn.svg";
import Mail from "@assets/mail.svg";
import Whatsapp from "@assets/whatsapp.svg";

export const navLinks: navLink[] = [
  { id: 1, label: "Notes", href: "/", icon: <JournalIcon /> },
  { id: 2, label: "Projects", href: "/projects", icon: <ProjectIcon /> },
];

export const socialLinks: navLink[] = [
  {
    id: 3,
    label: "", //GitHub
    href: "https://github.com/abanseka",
    icon: <GitHub />,
    renderSocialIcon: true,
  },
  {
    id: 4,
    label: "", //LinkedIn
    href: "https://www.linkedin.com/in/abanseka-sylvester/",
    icon: <LinkedIn />,
    renderSocialIcon: true,
  },
  {
    id: 5,
    label: "", //whatsapp
    href: "https://rb.gy/co3faa",
    icon: <Whatsapp />,
    renderSocialIcon: true,
  },
  {
    id: 5,
    label: "", //Gmail
    href: "mailto:abansekasly98@gmail.com",
    icon: <Mail />,
    renderSocialIcon: false,
  },
];
