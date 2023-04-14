import JournalIcon from "@assets/journal.svg";
import WorkIcon from "@assets/work.svg";
import GitHub from "@assets/rocket.svg";
import Person from "@assets/person.svg";
import { MenuContainer, NavLink } from "@styledComponents/global";
import { FlexContainer } from "@styledComponents/flex";

type navLink = {
  id: number;
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type MenuWidgetProps = {
  ma?: string;
  className?: string;
  renderIcon?: boolean;
};

const NavigationMenu = ({
  ma,
  className,
  renderIcon = true,
}: MenuWidgetProps) => {
  // prettier-ignore
  const navLinks: navLink[] = [
    { id: 1, label: "Lounge", href: "/", icon: <JournalIcon />, },
    { id: 2, label: "Works", href: "/works", icon: <WorkIcon />, },
    { id: 3, label: "GitHub", href: "https://github.com/abanseka", icon: <GitHub />, },
    { id: 4, label: "LinkedIn", href: "https://www.linkedin.com/in/abanseka-sylvester/", icon: <Person />, },
  ];

  return (
    <MenuContainer>
      <FlexContainer gp={1.2} ma={ma} pd="0.625rem" className={className}>
        {navLinks.map((link: navLink) => (
          <NavLink href={link.href} key={link.id}>
            {renderIcon && link.icon}
            {link.label}
          </NavLink>
        ))}
      </FlexContainer>
    </MenuContainer>
  );
};

export default NavigationMenu;
