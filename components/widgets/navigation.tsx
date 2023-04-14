import { NavLink, MenuContainer } from "@components/styled/global";
import JournalIcon from "@assets/journal.svg";
import WorkIcon from "@assets/work.svg";
import GitHub from "@assets/rocket.svg";
import Person from "@assets/person.svg";
import { FlexContainer } from "@components/styled/flex";

type navLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

const NavWidget = ({ renderIcon = true, ma }: { renderIcon?: boolean,ma?:string }) => {
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
    <MenuContainer as={FlexContainer} gp={1.2} pd="0.5rem 0.25rem" ma={ma}>
      {navLinks.map((link: navLink) => (
        <NavLink href={link.href} key={link.href}>
          {renderIcon && link.icon}
          {link.label}
        </NavLink>
      ))}
    </MenuContainer>
  );
};

export default NavWidget;
