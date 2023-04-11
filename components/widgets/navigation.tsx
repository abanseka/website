import { NavLink, WidgetWrapper } from "@components/styled/global";
import { theme } from "theme";
import JournalIcon from "@assets/journal.svg";
import WorkIcon from "@assets/work.svg";
import GitHub from "@assets/rocket.svg";
import Person from "@assets/person.svg";

type navLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

const NavWidget = ({ renderIcon = true }: { renderIcon?: boolean }) => {
  const navLinks: navLink[] = [
    {
      label: "Journal",
      href: "/journal",
      icon: <JournalIcon />,
    },
    {
      label: "Works",
      href: "/works",
      icon: <WorkIcon />,
    },
    {
      label: "GitHub",
      href: "https://github.com/abanseka",
      icon: <GitHub />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abanseka-sylvester/",
      icon: <Person />,
    },
  ];

  return (
    <WidgetWrapper gp={1.2} pd="0.5rem 0.25rem">
      {navLinks.map((link: navLink) => (
        <NavLink colors={theme.colors} href={link.href} key={link.href}>
          {renderIcon && link.icon}
          {link.label}
        </NavLink>
      ))}
    </WidgetWrapper>
  );
};

export default NavWidget;
